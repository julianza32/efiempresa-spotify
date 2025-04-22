import { Component } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth.service';

@Component({
  selector: 'app-button-login-avatar',
  imports: [],
  templateUrl: './button-login-avatar.component.html',
  styleUrl: './button-login-avatar.component.scss'
})
export class ButtonLoginAvatarComponent {

  constructor(private auth: SpotifyAuthService) {}

  login() {
    this.auth.login();
  }
}
