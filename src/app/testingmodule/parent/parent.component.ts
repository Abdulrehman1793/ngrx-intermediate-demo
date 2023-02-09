import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  counter!: number;

  constructor(private cService: CounterService) {}

  ngOnInit(): void {
    this.counter = this.cService.getValue();
  }

  onIncrement() {
    this.cService.counter$.next(this.counter + 1);
  }
}
