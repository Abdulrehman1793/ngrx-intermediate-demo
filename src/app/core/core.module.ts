import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

const materials = [MatToolbarModule, MatIconModule, MatButtonModule];

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, ...materials, RouterModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
