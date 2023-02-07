import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, EMPTY } from 'rxjs';

import { AppState } from 'src/app/store';
import { Album } from '../../models/album';
import { albums_request } from '../../store';
import { getSelectedAlbums } from '../../store/selectors';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent {
  albums$: Observable<Album[]> = EMPTY;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.albums$ = this.store.select(getSelectedAlbums);

    this.store.dispatch(albums_request());
  }
}
