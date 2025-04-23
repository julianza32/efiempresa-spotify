import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InfoAlbumComponent } from "../../components/info-album/info-album.component";
import { InfoGenresComponent } from "../../components/info-genres/info-genres.component";
import { ButtonLoginAvatarComponent } from "../../components/button-login-avatar/button-login-avatar.component";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../../services/search.service';
import { CommonModule } from '@angular/common';
import { IResponseSearch } from '../../../types/results';

@Component({
  selector: 'app-search',
  imports: [FontAwesomeModule, ButtonLoginAvatarComponent, FontAwesomeModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'] // Corregido: `styleUrl` -> `styleUrls`
})
export class SearchComponent {
  iconArrowLeft = faArrowLeft;

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