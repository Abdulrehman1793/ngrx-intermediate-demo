import { Post } from '../models/posts';
import { User } from '../models/user';

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

export interface UserState {
  users: User[];
  loading: boolean;
  failure?: string | undefined;
}

export const initialUserState = {
  users: [],
  loading: false,
  failure: undefined,
};

export interface PlaceholderState {
  postState: PostState;
  userState: UserState;
}

export const initialPlaceholder: PlaceholderState = {
  postState: { ...initialPostState },
  userState: { ...initialUserState },
};
