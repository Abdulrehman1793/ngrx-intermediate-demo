import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, EMPTY } from 'rxjs';

import { User } from '../../models/user';
import { getSelectedUser } from '../../store';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user$: Observable<User> = EMPTY;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.user$ = this.store.select(getSelectedUser);
  }
}
