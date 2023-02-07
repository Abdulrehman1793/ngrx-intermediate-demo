import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { EMPTY, Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import { getCounter } from '../store';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss'],
})
export class CounterDisplayComponent implements OnInit {
  counter$: Observable<number> = EMPTY;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }
}
