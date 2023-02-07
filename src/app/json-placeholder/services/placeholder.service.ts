import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
