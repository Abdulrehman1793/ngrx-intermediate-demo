import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/posts';
import { User } from '../models/user';

@Injectable()
export class PlaceholderService {
  rootUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get<User[]>(`${this.rootUrl}/users`);
  }

  setAvatar(user: User): User {
    return {
      ...user,
      image: `https://robohash.org/${user.username.toLowerCase()}`,
    };
  }

  getUserById(userId: any) {
    return this._http.get<User>(`${this.rootUrl}/users/${userId}`);
  }

  getUserPosts(userId: any) {
    return this._http.get<Post[]>(`${this.rootUrl}/posts?userId=${userId}`);
  }

  getUserTodos(userId: any) {
    return this._http.get<Post[]>(`${this.rootUrl}/todos?userId=${userId}`);
  }

  getUserAlbums(userId: any) {
    return this._http.get<Post[]>(`${this.rootUrl}/albums?userId=${userId}`);
  }
}
