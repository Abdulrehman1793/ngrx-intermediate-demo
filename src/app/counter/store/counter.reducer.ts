import { Action, createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';
import { CounterState, initialCounter } from './counter.state';

const _counterReducer = createReducer(
  initialCounter,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (_) => ({ ...initialCounter }))
);

export function counterReducer(state: CounterState, action: Action) {
  return _counterReducer(state, action);
}
