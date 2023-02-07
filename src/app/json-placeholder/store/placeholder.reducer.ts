import { Action, createReducer, on } from '@ngrx/store';
import {
  posts_fail,
  posts_loading,
  posts_request,
  posts_success,
} from './placeholder.action';
import {
  initialPlaceholder,
  initialPostState,
  PlaceholderState,
} from './placeholder.state';

const _placeholderReducer = createReducer(
  initialPlaceholder,
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
  }))
);

export function placeHolderReducer(state: PlaceholderState, action: Action) {
  return _placeholderReducer(state, action);
}
