import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlaceholderState } from './placeholder.state';

export const PLACEHOLDER_STATE_NAME = 'placeholder';

const getPlcaeholderState = createFeatureSelector<PlaceholderState>(
  PLACEHOLDER_STATE_NAME
);

export const getPostState = createSelector(
  getPlcaeholderState,
  (state) => state.posts
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
export const getUsersState = createSelector(
  getPlcaeholderState,
  (state) => state.users
);

export const getUsers = createSelector(getUsersState, (state) => state.users);
export const isUsersLoading = createSelector(
  getUsersState,
  (state) => state.loading
);
export const getUsersFailure = createSelector(
  getUsersState,
  (state) => state.failure
);

// User selector
export const getUserState = createSelector(
  getPlcaeholderState,
  (state) => state.user
);

export const getSelectedUser = createSelector(
  getUserState,
  (state) => state.user!
);
export const isUserLoading = createSelector(
  getUserState,
  (state) => state.loading
);
export const getUserFailure = createSelector(
  getUserState,
  (state) => state.failure
);

