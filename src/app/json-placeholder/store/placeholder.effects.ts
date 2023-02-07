import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import {
  filter,
  map,
  mergeMap,
  tap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';

import { AppState } from 'src/app/store';
import { PostService } from '../services';
import { posts_request, posts_success } from './placeholder.action';
import { getPosts } from './placeholder.selector';

@Injectable()
export class PlaceholderEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private store: Store<AppState>
  ) {}

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
