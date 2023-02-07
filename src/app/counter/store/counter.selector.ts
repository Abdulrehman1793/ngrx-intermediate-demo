import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CounterState } from './counter.state';

export const COUNTER_STATE_NAME = 'counter';

const counterState = createFeatureSelector<CounterState>(COUNTER_STATE_NAME);

export const getCounter = createSelector(counterState, (state) => {
  return state.counter;
});
