import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ClockState, ClockStateModel } from './clock.state';
import { SetClock } from './clock.actions';

describe('Clock store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ClockState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const current = new Date().toDateString();
    const expected: ClockStateModel = {
      date: current
    };
    store.dispatch(new SetClock({date: current}));
    const actual = store.selectSnapshot(ClockState.getState);
    expect(actual).toEqual(expected);
  });

});
