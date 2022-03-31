import { Component, OnInit } from '@angular/core';
import {
  interval,
  Subscription
} from 'rxjs';
import {Store} from '@ngxs/store';
import {SetClock} from '../../store/dashboard/states/clock/clock.actions';
import {
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  isStart: boolean = false;
  subscription = new Subscription();

  daysOfweek = ['sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat'];
  day: any;
  hour: string;
  minute: string
  second: string
  ampm: string

  formHour = new FormControl('10', Validators.required)


  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.startClock();
  }

  startClock(): void {
    if(!this.isStart) {
      this.subscription = interval(1000).subscribe(()=>
        this.setDate(new Date)
      )
      this.isStart=true;
    }
  }

  setDate(date: Date): void {
    this.store.dispatch(new SetClock({date: date.toString()}) );

    this.day = this.daysOfweek[date.getDay()];
    this.hour = date.getHours() % 12  ?  '12' : date.getHours().toString();
    this.minute = date.getMinutes() < 10 ? '0' + date.getMinutes() :  date.getMinutes().toString();
    this.second = date.getSeconds()  < 10 ? '0' + date.getSeconds() : date.getSeconds().toString();
    this.ampm = date.getHours() < 12 ? 'AM' : 'PM';
  }

  updateClock() {

  }

  stopClock() {
    if(this.isStart) {
      this.subscription.unsubscribe();
      this.isStart=false;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
