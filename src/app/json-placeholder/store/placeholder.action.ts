import { createAction, props } from '@ngrx/store';
import { Post } from '../models/posts';
import { User } from '../models/user';

export const posts_request = createAction(
  '[Json Placeholder] Get posts request'
);
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

export const users_request = createAction(
  '[Json Placeholder] Get users request'
);
export const users_loading = createAction(
  '[Json Placeholder] Get users loading'
);
export const users_success = createAction(
  '[Json Placeholder] Get users success',
  props<{ users: User[] }>()
);
export const users_fail = createAction(
  '[Json Placeholder] Get users fail',
  props<{ failure?: string }>()
);
