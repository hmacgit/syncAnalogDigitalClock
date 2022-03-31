import { State, Action, Selector, StateContext } from '@ngxs/store';
import { ClockAction } from './clock.actions';

export interface ClockStateModel {
  items: string[];
}

@State<ClockStateModel>({
  name: 'clock',
  defaults: {
    items: []
  }
})
export class ClockState {

  @Selector()
  public static getState(state: ClockStateModel) {
    return state;
  }

  @Action(ClockAction)
  public add(ctx: StateContext<ClockStateModel>, { payload }: ClockAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
