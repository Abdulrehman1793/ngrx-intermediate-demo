import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, EMPTY } from 'rxjs';

import { AppState } from 'src/app/store';
import { Post } from '../../models/posts';
import { getPosts, posts_request } from '../../store';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> = EMPTY;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);

    this.store.dispatch(posts_request());
  }
}
