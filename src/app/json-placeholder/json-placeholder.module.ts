import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { JsonPlaceholderRoutingModule } from './json-placeholder-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PLACEHOLDER_STATE_NAME, placeHolderReducer } from './store';
import { HttpClientModule } from '@angular/common/http';
import { PlaceholderEffects } from './store/placeholder.effects';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services';

@NgModule({
  declarations: [HomePageComponent, PostsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    JsonPlaceholderRoutingModule,
    StoreModule.forFeature(PLACEHOLDER_STATE_NAME, placeHolderReducer),
    EffectsModule.forFeature([PlaceholderEffects]),
  ],
  providers: [PostService],
})
export class JsonPlaceholderModule {}
