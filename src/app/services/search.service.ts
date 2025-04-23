import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private baseUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  private getAuthHeader(): HttpHeaders {
    const token = localStorage.getItem('spotify_access_token');
    if (!token) throw new Error('No access token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  search(query: string, types: string[] = ['track', 'artist']): Observable<any> {
    const url = `${this.baseUrl}/search`;
    const params = {
      q: query,
      type: types.join(','),
      limit: '10',
    };

    return this.http.get(url, {
      headers: this.getAuthHeader(),
      params,
    });
  }
}