import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoAlbumComponent } from "../../components/info-album/info-album.component";
import { InfoGenresComponent } from "../../components/info-genres/info-genres.component";
import { ButtonLoginAvatarComponent } from "../../components/button-login-avatar/button-login-avatar.component";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  imports: [FontAwesomeModule, InfoAlbumComponent, InfoGenresComponent, ButtonLoginAvatarComponent, FontAwesomeModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  iconArrowLeft = faArrowLeft;
}
