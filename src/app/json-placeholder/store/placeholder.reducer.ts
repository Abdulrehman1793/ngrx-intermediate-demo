import { Action, createReducer, on } from '@ngrx/store';
import {
  albums_fail,
  albums_loading,
  albums_request,
  albums_success,
  posts_fail,
  posts_loading,
  posts_request,
  posts_success,
  todos_fail,
  todos_loading,
  todos_request,
  todos_success,
  users_fail,
  users_loading,
  users_request,
  users_success,
  user_fail,
  user_loading,
  user_request,
  user_success,
} from './placeholder.action';
import {
  initialPlaceholder,
  initialPostState,
  initialUsersState,
  initialUserState,
  PlaceholderState,
} from './placeholder.state';
import { initialAlbumState, initialTodoState } from './state';

const _placeholderReducer = createReducer(
  initialPlaceholder,
  // Posts
  on(posts_request, (state) => {
    return {
      ...state,
      posts: { ...initialPostState },
    };
  }),
  on(posts_success, (state, { posts }) => {
    return {
      ...state,
      posts: { ...state.posts, posts, loading: false },
    };
  }),
  on(posts_loading, (state) => ({
    ...state,
    posts: { ...state.posts, loading: true },
  })),
  on(posts_fail, (state, { failure }) => ({
    ...state,
    posts: { ...state.posts, failure },
  })),

  // Users
  on(users_request, (state) => {
    return {
      ...state,
      users: { ...initialUsersState },
    };
  }),
  on(users_success, (state, { users }) => {
    return {
      ...state,
      users: { ...state.users, users, loading: false },
    };
  }),
  on(users_loading, (state) => ({
    ...state,
    users: { ...state.users, loading: true },
  })),
  on(users_fail, (state, { failure }) => ({
    ...state,
    users: { ...state.users, failure },
  })),

  // SELECTED User
  on(user_request, (state) => {
    return {
      ...state,
      user: { ...initialUserState },
    };
  }),
  on(user_success, (state, { user }) => {
    return {
      ...state,
      user: { ...state.user, user, loading: false },
    };
  }),
  on(user_loading, (state) => ({
    ...state,
    user: { ...state.user, loading: true },
  })),
  on(user_fail, (state, { failure }) => ({
    ...state,
    user: { ...state.user, failure },
  })),

  // SELECTED User's ALBUM
  on(albums_request, (state) => {
    return {
      ...state,
      album: { ...initialAlbumState },
    };
  }),
  on(albums_success, (state, { albums }) => {
    return {
      ...state,
      album: { ...state.album, albums, loading: false },
    };
  }),
  on(albums_loading, (state) => ({
    ...state,
    album: { ...state.album, loading: true },
  })),
  on(albums_fail, (state, { failure }) => ({
    ...state,
    album: { ...state.album, failure },
  })),

  // SELECTED User's TODOS
  on(todos_request, (state) => {
    return {
      ...state,
      todo: { ...initialTodoState },
    };
  }),
  on(todos_success, (state, { todos }) => {
    return {
      ...state,
      todo: { ...state.todo, todos, loading: false },
    };
  }),
  on(todos_loading, (state) => ({
    ...state,
    todo: { ...state.todo, loading: true },
  })),
  on(todos_fail, (state, { failure }) => ({
    ...state,
    todo: { ...state.todo, failure },
  }))
);

export function placeHolderReducer(state: PlaceholderState, action: Action) {
  return _placeholderReducer(state, action);
}
