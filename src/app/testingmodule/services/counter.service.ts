import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter$ = new BehaviorSubject(0);

  constructor() {}

  getValue() {
    return this.counter$.getValue();
  }

  increment() {
    this.counter$.next(this.getValue() + 1);
  }
}
