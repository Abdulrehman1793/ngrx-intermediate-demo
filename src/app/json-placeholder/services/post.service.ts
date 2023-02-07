import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/posts';

@Injectable()
export class PostService {
  rootUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private _http: HttpClient) {}

  getPosts() {
    return this._http.get<Post[]>(`${this.rootUrl}/posts`);
  }
}
