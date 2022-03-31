export class SyncClockAction {
  public static readonly type = '[SyncClock] Add item';
  constructor(public payload: string) { }
}