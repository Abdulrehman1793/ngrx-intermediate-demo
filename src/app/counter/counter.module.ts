import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';



@NgModule({
  declarations: [
    CounterComponent,
    CounterDisplayComponent,
    CounterButtonsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CounterModule { }
