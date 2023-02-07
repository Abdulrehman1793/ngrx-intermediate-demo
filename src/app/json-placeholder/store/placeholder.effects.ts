import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { map, mergeMap, withLatestFrom } from 'rxjs';

import { AppState } from 'src/app/store';
import { PlaceholderService } from '../services/placeholder.service';
import {
  posts_request,
  posts_success,
  users_request,
  users_success,
  user_request,
  user_success,
} from './placeholder.action';
import { getSelectedUser } from './placeholder.selector';

@Injectable()
export class PlaceholderEffects {
  constructor(
    private actions$: Actions,
    private placeHolderService: PlaceholderService,
    private store: Store<AppState>
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(users_request),
      mergeMap(() =>
        this.placeHolderService.getUsers().pipe(
          map((users) => {
            users = users.map((user) =>
              this.placeHolderService.setAvatar(user)
            );
            return users_success({ users });
          })
        )
      )
    )
  );

  selectedUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(user_request),
      mergeMap(({ userId }) =>
        this.placeHolderService.getUserById(userId).pipe(
          map((user) => {
            user = this.placeHolderService.setAvatar(user);
            return user_success({ user });
          })
        )
      )
    )
  );

  loadUserPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(posts_request),
      withLatestFrom(this.store.select(getSelectedUser)),
      mergeMap(([action, user]) => {
        return this.placeHolderService
          .getUserPosts(user.id)
          .pipe(map((posts) => posts_success({ posts })));
      })
    )
  );
}
