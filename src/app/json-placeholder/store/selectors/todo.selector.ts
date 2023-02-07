import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PLACEHOLDER_STATE_NAME } from '../placeholder.selector';
import { PlaceholderState } from '../placeholder.state';

const getPlcaeholderState = createFeatureSelector<PlaceholderState>(
  PLACEHOLDER_STATE_NAME
);

const getTodoState = createSelector(getPlcaeholderState, (state) => state.todo);

export const getSelectedTodos = createSelector(
  getTodoState,
  (state) => state.todos
);
export const isTodosLoading = createSelector(
  getTodoState,
  (state) => state.loading
);
export const getTodosFailure = createSelector(
  getTodoState,
  (state) => state.failure
);
