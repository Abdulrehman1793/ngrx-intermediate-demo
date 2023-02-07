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

// Users selector
export const getUserState = createSelector(
  getPlcaeholderState,
  (state) => state.userState
);

export const getUsers = createSelector(getUserState, (state) => state.users);
export const isUsersLoading = createSelector(
  getUserState,
  (state) => state.loading
);
export const getUsersFailure = createSelector(
  getUserState,
  (state) => state.failure
);
