import { State, Action, Selector, StateContext } from '@ngxs/store';
import { SetClock } from './clock.actions';


export interface ClockStateModel {
  date: string;
}

@State<ClockStateModel>({
  name: 'clock',
  defaults: {
    date: ''
  }
})
export class ClockState {

  @Selector()
  public static getState(state: ClockStateModel) {
    return state;
  }



  @Action(SetClock)
  public setClock(ctx: StateContext<ClockStateModel>, { payload }: SetClock) {
    ctx.setState(payload);
  }

}