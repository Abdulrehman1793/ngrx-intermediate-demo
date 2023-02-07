import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

import { CounterComponent } from './counter/counter.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer, COUNTER_STATE_NAME } from './store';

@NgModule({
  declarations: [
    CounterComponent,
    CounterDisplayComponent,
    CounterButtonsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CounterComponent }]),
    StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer),
    MatButtonModule,
  ],
})
export class CounterModule {}
