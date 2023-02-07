import { Album } from '../../models/album';

export interface AlbumState {
  albums: Album[];
  loading: boolean;
  failure?: string | undefined;
}

export const initialAlbumState: AlbumState = {
  albums: [],
  loading: false,
  failure: undefined,
};
