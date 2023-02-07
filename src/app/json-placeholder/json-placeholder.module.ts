import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { JsonPlaceholderRoutingModule } from './json-placeholder-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { PLACEHOLDER_STATE_NAME, placeHolderReducer } from './store';
import { PlaceholderEffects } from './store/placeholder.effects';
import { UsersComponent } from './pages/users/users.component';
import { PlaceholderService } from './services/placeholder.service';
import { UserComponent } from './pages/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { TodosComponent } from './components/todos/todos.component';
import { PostsComponent } from './components/posts/posts.component';

const materials = [
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatButtonModule,
  MatTabsModule,
];

@NgModule({
  declarations: [
    HomePageComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    AlbumsComponent,
    TodosComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    JsonPlaceholderRoutingModule,
    StoreModule.forFeature(PLACEHOLDER_STATE_NAME, placeHolderReducer),
    EffectsModule.forFeature([PlaceholderEffects]),
    ...materials,
  ],
  providers: [PlaceholderService],
})
export class JsonPlaceholderModule {}
