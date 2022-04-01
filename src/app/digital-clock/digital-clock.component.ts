import { Component, OnInit } from '@angular/core';
import {
  interval,
  Subscription
} from 'rxjs';
import {Store} from '@ngxs/store';
import {SetClock} from '../../store/dashboard/states/clock/clock.actions';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  mergeMap,
  tap
} from 'rxjs/operators';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  isStart: boolean = false;
  subscription = new Subscription();
  runtime: Date;

  daysOfweek = ['sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat'];
  day: any;
  hour: number;
  minute: number;
  second: number;

  formHour = new FormControl('');
  formMinute = new FormControl('');
  formSecond = new FormControl('');

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.runtime = new Date();
    this.startClock();
  }

  startClock(): void {
    if(!this.isStart) {
      this.subscription = interval(1000).subscribe(()=> {
          this.runtime = this.runtime !== null ? this.runtime : new Date;
          return this.setDate(this.runtime);
      });
      this.isStart=true;
    }
  }

  setDate(date: Date): void {
    this.store.dispatch(new SetClock({date: date.toString()}) );

    this.day = this.daysOfweek[date.getDay()];
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();

    this.formHour.setValue(date.getHours());
    this.formMinute.setValue(date.getMinutes());
    this.formSecond.setValue(date.getSeconds());

    this.runtime.setSeconds(this.runtime.getSeconds() + 1);

  }

  updateClock() {

    const date = new Date();
    date.setHours(Number(this.formHour.value));
    date.setMinutes(Number(this.formMinute.value));
    date.setSeconds(Number(this.formSecond.value));

    this.runtime = date;
    this.startClock();
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
