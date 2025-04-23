import { Component, inject } from '@angular/core';
import { ButtonLoginAvatarComponent } from '../../components/button-login-avatar/button-login-avatar.component';
import { SpotifyAuthService } from '../../services/spotify-auth.service';

@Component({
  selector: 'app-login',
  imports: [ButtonLoginAvatarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private auth = inject(SpotifyAuthService);

  ngOnInit() {
    this.auth.login();
  }
}
