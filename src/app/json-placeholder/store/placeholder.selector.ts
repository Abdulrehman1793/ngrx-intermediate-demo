import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlaceholderState } from './placeholder.state';

export const PLACEHOLDER_STATE_NAME = 'placeholder';

const getPlcaeholderState = createFeatureSelector<PlaceholderState>(
  PLACEHOLDER_STATE_NAME
);

export const getPostState = createSelector(
  getPlcaeholderState,
  (state) => state.postState
);

export const getPosts = createSelector(getPostState, (state) => state.posts);
export const isPostsLoading = createSelector(
  getPostState,
  (state) => state.loading
);
export const getPostsFailure = createSelector(
  getPostState,
  (state) => state.failure
);
