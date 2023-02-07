import { Action, createReducer, on } from '@ngrx/store';
import {
  posts_fail,
  posts_loading,
  posts_request,
  posts_success,
  users_fail,
  users_loading,
  users_request,
  users_success,
} from './placeholder.action';
import {
  initialPlaceholder,
  initialPostState,
  initialUserState,
  PlaceholderState,
} from './placeholder.state';

const _placeholderReducer = createReducer(
  initialPlaceholder,
  // Posts
  on(posts_request, (state) => {
    return {
      ...state,
      postState: { ...initialPostState },
    };
  }),
  on(posts_success, (state, { posts }) => {
    return {
      ...state,
      postState: { ...state.postState, posts, loading: false },
    };
  }),
  on(posts_loading, (state) => ({
    ...state,
    postState: { ...state.postState, loading: true },
  })),
  on(posts_fail, (state, { failure }) => ({
    ...state,
    postState: { ...state.postState, failure },
  })),

  // Users
  on(users_request, (state) => {
    return {
      ...state,
      userState: { ...initialUserState },
    };
  }),
  on(users_success, (state, { users }) => {
    return {
      ...state,
      userState: { ...state.userState, users, loading: false },
    };
  }),
  on(users_loading, (state) => ({
    ...state,
    userState: { ...state.userState, loading: true },
  })),
  on(users_fail, (state, { failure }) => ({
    ...state,
    userState: { ...state.userState, failure },
  }))
);

export function placeHolderReducer(state: PlaceholderState, action: Action) {
  return _placeholderReducer(state, action);
}
