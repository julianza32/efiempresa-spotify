import { Component, inject, signal } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth.service';
import { CommonModule } from '@angular/common';
import { IUser } from '../../../types/user';
import { SesionService } from '../../services/session.service';

@Component({
  selector: 'app-button-login-avatar',
  imports: [CommonModule],
  templateUrl: './button-login-avatar.component.html',
  styleUrl: './button-login-avatar.component.scss',
})
export class ButtonLoginAvatarComponent  {
  sessionSignal = signal<IUser | undefined>(undefined);
  private sesionService = inject(SesionService);
  constructor(private auth: SpotifyAuthService) {}

  login() {
    this.auth.login();
  }

  ngOnDestroy() {
    if(typeof window === 'undefined') return;
    window.removeEventListener('storage', this.syncSession);
  }

  loadSession() {
    if (typeof window === 'undefined') return;
    const storedSession = localStorage.getItem('session');
    this.sessionSignal.set(
      storedSession ? JSON.parse(storedSession) : undefined
    );
  }

  syncSession = () => {
    this.loadSession();
  };

  ngOnInit() {
    this.sesionService.session$.subscribe((user) => {
      this.sessionSignal.set(user);
    });
  }

  closeSesion() {
    this.sesionService.clearSession();
  }
}
