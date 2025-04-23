import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SpotifyShowItem } from '../../../types/results';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-play-list',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './list-play-list.component.html',
  styleUrl: './list-play-list.component.scss'
})
export class ListPlayListComponent {
  private searchService = inject(SearchService);
  private router = inject(Router);
  listPlaylist: SpotifyShowItem[] = [];
  iconMusic = faMusic;

  ngOnInit() {
    this.searchService.getPlaylistsByMe().subscribe(
     {
        next: (response) => {
          this.listPlaylist = response.items;
        },
        error: (error) => {
          console.error('Error fetching playlists:', error);
        },
     }
    );
  }
  navigate(id: string): void {
    this.router.navigate(['playlist',id]);
  }
}
