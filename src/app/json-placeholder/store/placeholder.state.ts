import { Post } from '../models/posts';
import { User } from '../models/user';
import {
  AlbumState,
  initialAlbumState,
  initialTodoState,
  TodoState,
} from './state';

// Posts State
export interface PostState {
  posts: Post[];
  loading: boolean;
  failure?: string | undefined;
}

export const initialPostState = {
  posts: [],
  loading: false,
  failure: undefined,
};

// USERS State
export interface UsersState {
  users: User[];
  loading: boolean;
  failure?: string | undefined;
}

export const initialUsersState = {
  users: [],
  loading: false,
  failure: undefined,
};

// SELECTED USER State
export interface UserState {
  user: User | undefined;
  loading: boolean;
  failure?: string | undefined;
}

export const initialUserState = {
  user: undefined,
  loading: false,
  failure: undefined,
};

export interface PlaceholderState {
  posts: PostState;
  users: UsersState;
  user: UserState;
  album: AlbumState;
  todo: TodoState;
}

export const initialPlaceholder: PlaceholderState = {
  posts: { ...initialPostState },
  users: { ...initialUsersState },
  user: { ...initialUserState },
  album: { ...initialAlbumState },
  todo: { ...initialTodoState },
};
