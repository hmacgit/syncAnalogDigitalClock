import { State } from '@ngxs/store';
import { DictionaryState } from './states/dictionary/dictionary.state';
import { UserState } from './states/user/user.state';
import {ClockState} from './states/clock/clock.state';

export const DashboardStates = [DictionaryState, UserState, ClockState];

@State({
  name: 'dashboardStateModule',
  children: DashboardStates
})
export class DashboardStateModule {}
