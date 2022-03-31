import { State, Action, Selector, StateContext } from '@ngxs/store';
import { SyncClockAction } from './sync-clock.actions';

export interface SyncClockStateModel {
  items: string[];
}

@State<SyncClockStateModel>({
  name: 'syncClock',
  defaults: {
    items: []
  }
})
export class SyncClockState {

  @Selector()
  public static getState(state: SyncClockStateModel) {
    return state;
  }

  @Action(SyncClockAction)
  public add(ctx: StateContext<SyncClockStateModel>, { payload }: SyncClockAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
