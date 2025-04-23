import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SpotifyAuthService } from '../../services/spotify-auth.service';
import { Router } from '@angular/router';
import { SesionService } from '../../services/session.service';

export default {
  renderMode: 'csr',
};
@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss'],
})
export class CallbackComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private spotifyAuth: SpotifyAuthService,
    private sessionService: SesionService,
    private router: Router
  ) {}

  ngOnInit() {
    if (typeof window !== 'undefined' && isPlatformBrowser(this.platformId)) {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        this.spotifyAuth.handleCallback(code).subscribe({
          next: (token) => {
            console.log('Token:', token);
            localStorage.setItem(
              'spotify_access_token',
              token.data.access_token
            );
            this.sessionService.setSession(token.user);
            this.router.navigate(['']);
          },
          error: (err) => {
            console.error('Error en login:', err);
          },
        });
      }
    } else {
      console.error('This code must run in a browser environment.');
    }
  }
}
