import { createAction, props } from '@ngrx/store';
import { Post } from '../models/posts';
import { User } from '../models/user';

// ALL POSTS
export const posts_request = createAction('[Placeholder] Get posts request');
export const posts_loading = createAction('[Placeholder] Get posts loading');
export const posts_success = createAction(
  '[Placeholder] Get posts success',
  props<{ posts: Post[] }>()
);
export const posts_fail = createAction(
  '[Placeholder] Get posts fail',
  props<{ failure?: string }>()
);

// USERS list

export const users_request = createAction('[Placeholder] Get users request');
export const users_loading = createAction('[Placeholder] Get users loading');
export const users_success = createAction(
  '[Placeholder] Get users success',
  props<{ users: User[] }>()
);
export const users_fail = createAction(
  '[Placeholder] Get users fail',
  props<{ failure?: string }>()
);

// SELECTED user
export const user_request = createAction(
  '[Placeholder] Get user request',
  props<{ userId: any }>()
);
export const user_loading = createAction('[Placeholder] Get user loading');
export const user_success = createAction(
  '[Placeholder] Get user success',
  props<{ user: User }>()
);
export const user_fail = createAction(
  '[Placeholder] Get user fail',
  props<{ failure?: string }>()
);
