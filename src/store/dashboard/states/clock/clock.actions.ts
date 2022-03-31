import {ClockStateModel} from './clock.state';


export class SetClock {
  public static readonly type = '[Clock] Add item';
  constructor(public payload: ClockStateModel) { }
}