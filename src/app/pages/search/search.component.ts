import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonLoginAvatarComponent } from "../../components/button-login-avatar/button-login-avatar.component";
import { faArrowLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../../services/search.service';
import { CommonModule } from '@angular/common';
import { IResponseSearch } from '../../../types/results';
import { InfoMusicComponent } from "../../components/info-music/info-music.component";
import { InfoArtistComponent } from "../../components/info-artist/info-artist.component";
import { InfoAlbumComponent } from "../../components/info-album/info-album.component";

@Component({
  selector: 'app-search',
  imports: [FontAwesomeModule, ButtonLoginAvatarComponent, FontAwesomeModule, CommonModule, InfoMusicComponent, InfoArtistComponent, InfoAlbumComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  iconArrowLeft = faArrowLeft;
  iconSearch = faMagnifyingGlass;

  private searchService = inject(SearchService);
  public results: IResponseSearch | null = null;

  onSearch(query: string) {
    this.searchService.search(query).subscribe({
      next: (data) => {
        console.log('Resultados:', data);
        this.results = data;
      },
      error: (err) => {
        console.error('Error al buscar:', err);
      },
    });
  }
}