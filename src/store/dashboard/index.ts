import { State } from '@ngxs/store';
import { DictionaryState } from './states/dictionary/dictionary.state';
import { UserState } from './states/user/user.state';
import {SyncClockState} from './states/sync-clock/sync-clock.state';

export const DashboardStates = [DictionaryState, UserState, SyncClockState];

@State({
  name: 'dashboardStateModule',
  children: DashboardStates
})
export class DashboardStateModule {}
