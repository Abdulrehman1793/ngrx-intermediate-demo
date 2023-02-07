import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, EMPTY } from 'rxjs';

import { AppState } from 'src/app/store';
import { Todo } from '../../models/todo';
import { todos_request } from '../../store';
import { getSelectedTodos } from '../../store/selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos$: Observable<Todo[]> = EMPTY;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.todos$ = this.store.select(getSelectedTodos);

    this.store.dispatch(todos_request());
  }
}
