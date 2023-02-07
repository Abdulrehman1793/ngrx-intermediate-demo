import { Post } from '../models/posts';

export interface PostState {
  posts: Post[];
  loading: boolean;
  failure?: string | undefined;
}

export const initialPostState = {
  posts: [],
  loading: true,
  failure: undefined,
};

export interface PlaceholderState {
  postState: PostState;
}

export const initialPlaceholder: PlaceholderState = {
  postState: { ...initialPostState },
};
