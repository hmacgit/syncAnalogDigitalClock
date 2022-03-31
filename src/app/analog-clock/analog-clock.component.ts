import { Component, OnInit } from '@angular/core';
import {
  ClockState,
  ClockStateModel
} from '../../store/dashboard/states/clock/clock.state';
import {
  Select,
  Store
} from '@ngxs/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {

  @Select(ClockState) clockState$: Observable<string>;
  clockSt$: Observable<string>;
  time: string;

  constructor(private store: Store) { }

  ngOnInit(): void {
/*
    this.clockState$ = this.store
      .select(ClockState.getState)
      .pipe(
        map((x) => 'date')
        );*/


  }

  hourHandStyle : {transform: string};
  minuteHandStyle: {transform: string};
  secondHandStyle: {transform: string};

  isRunning = true;
  timerId: any;

  date: Date;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;

  ngAfterViewInit() {
    //this.timerId = this.getTime();
    this.clockSt$.subscribe(
      (x) => {this.timerId = x; console.log(x)}
    );
  }

  animateAnalogClock() {
    this.hourHandStyle = {
      transform: `translate3d(-50%, 0, 0) rotate(${
        this.hour * 30 + this.minute * 0.5 + this.second * (0.5 / 60)
      }deg)`,
    };

    this.minuteHandStyle = {
      transform: `translate3d(-50%, 0, 0) rotate(${
        this.minute * 6 + this.second * 0.1
      }deg)`,
    };

    this.secondHandStyle = {
      transform: `translate3d(-50%, 0, 0) rotate(${this.second * 6}deg)`,
    };
  }

  getTime() {
    return setInterval(() => {
      this.date = new Date();
      this.hour = this.date.getHours();
      this.minute = this.date.getMinutes();
      this.second = this.date.getSeconds();

      this.animateAnalogClock();
    }, 1000);
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

}
