import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ClockState, ClockStateModel } from './clock.state';
import { ClockAction } from './clock.actions';

describe('Clock store', () => {
  let store: Store;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ClockState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    const expected: ClockStateModel = {
      items: ['item-1']
    };
    store.dispatch(new ClockAction('item-1'));
    const actual = store.selectSnapshot(ClockState.getState);
    expect(actual).toEqual(expected);
  });

});
