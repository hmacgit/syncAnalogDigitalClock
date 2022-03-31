import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { SyncClockState, SyncClockStateModel } from './sync-clock.state';
import { SyncClockAction } from './sync-clock.actions';

describe('SyncClock store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SyncClockState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: SyncClockStateModel = {
      items: ['item-1']
    };
    store.dispatch(new SyncClockAction('item-1'));
    const actual = store.selectSnapshot(SyncClockState.getState);
    expect(actual).toEqual(expected);
  });

});
