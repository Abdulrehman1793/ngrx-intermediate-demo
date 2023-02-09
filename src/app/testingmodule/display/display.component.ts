import { Component, Input, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  counter$: Observable<number> = EMPTY;

  constructor(private cs: CounterService) {}

  ngOnInit(): void {
    this.counter$ = this.cs.counter$;
  }
}
