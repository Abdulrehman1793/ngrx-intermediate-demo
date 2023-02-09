import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [DisplayComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DisplayComponent }]),
    MatCardModule,
    MatDividerModule,
  ],
})
export class DisplaycardModule {}
