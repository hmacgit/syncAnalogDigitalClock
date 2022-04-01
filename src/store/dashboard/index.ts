import { State } from '@ngxs/store';
import {ClockState} from './states/clock/clock.state';

export const DashboardStates = [ClockState];

@State({
  name: 'dashboardStateModule',
  children: DashboardStates
})
export class DashboardStateModule {}
