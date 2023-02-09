import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { DisplayComponent } from './display/display.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [ParentComponent, DisplayComponent, ButtonsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([{ path: '', component: ParentComponent }]),
  ],
})
export class TestingmoduleModule {}
