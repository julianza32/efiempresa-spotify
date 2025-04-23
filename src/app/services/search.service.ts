import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { Album, AlbumSearchResults, Artist, IResponseSearch, SingleResponsePlaylist, SpotifyCategoryResponse, SpotifyUserShowsResponse, TrackSearchResults } from '../../types/results';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private baseUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  search(query: string, types: string[] = ['track', 'artist', 'album']): Observable<IResponseSearch> {
    const url = `${this.baseUrl}/search`;
    const params = {
      q: query,
      type: types.join(','),
      limit: '10',
    };

    return this.http.get<IResponseSearch>(url, {
      params,
    });
  }

  getCategories(): Observable<SpotifyCategoryResponse> {
    const url = `${this.baseUrl}/browse/categories?limit=10`;
    return this.http.get<SpotifyCategoryResponse>(url, {
    });
  }
  getNewReleases(): Observable<IResponseSearch> {
    const url = `${this.baseUrl}/browse/new-releases?limit=10`;
    return this.http.get<IResponseSearch>(url, {
    });
  }
  
  getAlbumsByArtist(artistId: string): Observable<AlbumSearchResults> {
    const url = `${this.baseUrl}/artists/${artistId}/albums`;
    return this.http.get<AlbumSearchResults>(url, {
      params: {
        limit: '10',
      },
    });
  }
  getArtistById(artistId: string): Observable<Artist> {
    const url = `${this.baseUrl}/artists/${artistId}`;
    return this.http.get<Artist>(url);
  }
  getArtistAndAlbums(artistId: string): Observable<{ artist: Artist; albums: AlbumSearchResults }> {
    const artist$ = this.getArtistById(artistId);
    const albums$ = this.getAlbumsByArtist(artistId);

    return forkJoin({ artist: artist$, albums: albums$ }).pipe(
      map((response) => ({
        artist: response.artist,
        albums: response.albums,
      }))
    );
  }

  getSongsByAlbum(albumId: string): Observable<TrackSearchResults> {
    const url = `${this.baseUrl}/albums/${albumId}/tracks`;
    return this.http.get<any>(url, {
      params: {
        limit: '10',
      },
    });
  }
  getAlbumById(albumId: string): Observable<Album> {
    const url = `${this.baseUrl}/albums/${albumId}`;
    return this.http.get<any>(url);
  }

  getAlbumAndSongs(albumId: string): Observable<{ album: Album; songs: TrackSearchResults }> {
    const album$ = this.getAlbumById(albumId);
    const songs$ = this.getSongsByAlbum(albumId);

    return forkJoin({ album: album$, songs: songs$ }).pipe(
      map((response) => ({
        album: response.album,
        songs: response.songs,
      }))
    );
  }

  getPlaylistsByMe(): Observable<SpotifyUserShowsResponse> {
    const url = `${this.baseUrl}/me/playlists`;
    return this.http.get<SpotifyUserShowsResponse>(url, {
      params: {
        limit: '10',
      },
    });
  }

  getPlaylistById(playlistId: string): Observable<SingleResponsePlaylist> {
    const url = `${this.baseUrl}/playlists/${playlistId}`;
    return this.http.get<SingleResponsePlaylist>(url);
  }
}

