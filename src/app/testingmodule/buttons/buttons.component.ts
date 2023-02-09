import { Component, EventEmitter, Output } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  constructor(private cs: CounterService) {}

  onIcrement() {
    this.cs.increment();
  }
}
