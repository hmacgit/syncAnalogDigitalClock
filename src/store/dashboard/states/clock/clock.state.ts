import { State, Action, Selector, StateContext } from '@ngxs/store';
import { SetClock } from './clock.actions';
import {Injectable} from '@angular/core';


export interface ClockStateModel {
  date: string;
}

@State<ClockStateModel>({
  name: 'clock',
  defaults: {
    date: ''
  }
})
@Injectable()
export class ClockState {

  @Selector()
  public static getState(state: ClockStateModel) {
    return state;
  }

  @Selector()
  public static getDate(state: ClockStateModel) {
    return state.date;
  }

  @Action(SetClock)
  public setClock(ctx: StateContext<ClockStateModel>, { payload }: SetClock) {
    ctx.setState(payload);
  }

}
