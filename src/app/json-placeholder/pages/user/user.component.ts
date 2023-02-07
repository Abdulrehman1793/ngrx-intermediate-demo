import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store';
import { User } from '../../models/user';
import { getSelectedUser, user_request } from '../../store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  user$: Observable<User> = EMPTY;
  routeSubscription?: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.user$ = this.store.select(getSelectedUser);

    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      this.store.dispatch(user_request({ userId: params.get('userId') }));
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }
}
