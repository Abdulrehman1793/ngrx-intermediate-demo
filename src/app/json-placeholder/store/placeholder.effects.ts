import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { map, mergeMap } from 'rxjs/operators';

import { AppState } from 'src/app/store';
import { PostService } from '../services';
import { PlaceholderService } from '../services/placeholder.service';
import {
  posts_request,
  posts_success,
  users_request,
  users_success,
} from './placeholder.action';

@Injectable()
export class PlaceholderEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private placeHolderService: PlaceholderService,
    private store: Store<AppState>
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(users_request),
      mergeMap(() =>
        this.placeHolderService
          .getUsers()
          .pipe(map((users) => users_success({ users })))
      )
    )
  );

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(posts_request),
      mergeMap(() =>
        this.postService
          .getPosts()
          .pipe(map((posts) => posts_success({ posts })))
      )
    )
  );
}
