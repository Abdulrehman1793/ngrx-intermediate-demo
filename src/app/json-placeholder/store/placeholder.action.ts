import { createAction, props } from '@ngrx/store';
import { Post } from '../models/posts';

export const posts_request = createAction('[Json Placeholder] Get posts');
export const posts_loading = createAction(
  '[Json Placeholder] Get posts loading'
);
export const posts_success = createAction(
  '[Json Placeholder] Get posts success',
  props<{ posts: Post[] }>()
);
export const posts_fail = createAction(
  '[Json Placeholder] Get posts fail',
  props<{ failure?: string }>()
);
