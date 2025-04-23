import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpotifyAuthService {
  clientId = '464dac1f5e194c8e886022930e43380b';
  redirectUri = 'http://127.0.0.1:4200/callback';
  scopes = ['user-read-private', 'user-read-email'];

  constructor(private http: HttpClient) {}

  private generateCodeVerifier(length = 128): string {
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from(
      { length },
      () => possible[Math.floor(Math.random() * possible.length)]
    ).join('');
  }

  private async generateCodeChallenge(verifier: string): Promise<string> {
    const data = new TextEncoder().encode(verifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
  }

  async login() {
    const verifier = this.generateCodeVerifier();
    const challenge = await this.generateCodeChallenge(verifier);

    localStorage.setItem('spotify_code_verifier', verifier);

    const params = new HttpParams({
      fromObject: {
        response_type: 'code',
        client_id: this.clientId,
        scope: this.scopes.join(' '),
        redirect_uri: this.redirectUri,
        code_challenge_method: 'S256',
        code_challenge: challenge,
      },
    });

    if (typeof window !== 'undefined') {
      window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
    } else {
      console.error(
        'Window is not defined. This code must run in a browser environment.'
      );
    }
  }

  handleCallback(code: string): Observable<any> {

    const verifier = localStorage.getItem('spotify_code_verifier');

    const body = new HttpParams({
      fromObject: {
        grant_type: 'authorization_code',
        code,
        redirect_uri: this.redirectUri,
        client_id: this.clientId,
        code_verifier: verifier!,
      },
    });

    return this.http
      .post('https://accounts.spotify.com/api/token', body.toString(), {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      })
      .pipe(
        switchMap((data: any) => {
          const headers = new HttpHeaders({
            Authorization: `Bearer ${data.access_token}`,
            'Content-Type': 'application/json',
          });

          return this.http
            .get('https://api.spotify.com/v1/me', { headers })
            .pipe(
              map((user: any) => ({
                data,
                user,
              }))
            );
        })
      );
  }

}
