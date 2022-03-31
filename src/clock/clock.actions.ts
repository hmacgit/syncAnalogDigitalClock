export class ClockAction {
  public static readonly type = '[Clock] Add item';
  constructor(public payload: string) { }
}