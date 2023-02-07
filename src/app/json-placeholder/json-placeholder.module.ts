import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatListModule } from '@angular/material/list';

import { JsonPlaceholderRoutingModule } from './json-placeholder-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PLACEHOLDER_STATE_NAME, placeHolderReducer } from './store';
import { PlaceholderEffects } from './store/placeholder.effects';
import { PostsComponent } from './pages/posts/posts.component';
import { PostService } from './services';
import { UsersComponent } from './pages/users/users.component';
import { PlaceholderService } from './services/placeholder.service';

const materials = [MatListModule];

@NgModule({
  declarations: [HomePageComponent, PostsComponent, UsersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    JsonPlaceholderRoutingModule,
    StoreModule.forFeature(PLACEHOLDER_STATE_NAME, placeHolderReducer),
    EffectsModule.forFeature([PlaceholderEffects]),
    ...materials,
  ],
  providers: [PostService, PlaceholderService],
})
export class JsonPlaceholderModule {}
