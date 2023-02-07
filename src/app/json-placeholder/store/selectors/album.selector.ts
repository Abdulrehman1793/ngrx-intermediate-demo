import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PLACEHOLDER_STATE_NAME } from '../placeholder.selector';
import { PlaceholderState } from '../placeholder.state';

const getPlcaeholderState = createFeatureSelector<PlaceholderState>(
  PLACEHOLDER_STATE_NAME
);

const getAlbumState = createSelector(
  getPlcaeholderState,
  (state) => state.album
);

export const getSelectedAlbums = createSelector(
  getAlbumState,
  (state) => state.albums
);
export const isAlbumsLoading = createSelector(
  getAlbumState,
  (state) => state.loading
);
export const getAlbumsFailure = createSelector(
  getAlbumState,
  (state) => state.failure
);
