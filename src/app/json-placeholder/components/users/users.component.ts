import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { User } from '../../models/user';
import { getUsers, users_request } from '../../store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]> = EMPTY;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(users_request());
  }

  ngOnInit(): void {
    this.users$ = this.store.select(getUsers);
  }
}
