import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { SingleResponsePlaylist } from '../../../types/results';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

export default {
  renderMode: 'csr', 
};
@Component({
  selector: 'app-playlist',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.scss',
})
export class PlaylistComponent {
  private routeActive = inject(ActivatedRoute);
  playlistId: string | null = null;
  playList : SingleResponsePlaylist = {} as SingleResponsePlaylist;
  iconMusic = faMusic;
  private searchService = inject(SearchService);
  ngOnInit() {
    this.routeActive.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id && id !== this.playlistId) {
        this.playlistId = id;
        this.getPlaylistId(id);
      }
    });
  }
  
  getPlaylistId(id: string) {

    this.searchService.getPlaylistById(id).subscribe({
      next: (response) => {
        this.playList = response;
      },
      error: (error) => {
        console.error('Error fetching playlist:', error);
      },
    });
  }
  convertMsToMinutesAndSeconds(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
