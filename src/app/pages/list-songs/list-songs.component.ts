import { Component, inject } from '@angular/core';
import { Album, Track } from '../../../types/results';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { CommonModule } from '@angular/common';
import { faDownload, faEllipsisH, faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export default {
  renderMode: 'csr',
};
@Component({
  selector: 'app-list-songs',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './list-songs.component.html',
  styleUrl: './list-songs.component.scss',
})
export class ListSongsComponent {
  listSongs: Track[] = [];
  infoAlbum: Album = {} as Album;
  searchService = inject(SearchService);
  constructor(private route: ActivatedRoute) {}
  iconHeart = faHeart;
  iconElipsis = faEllipsisH;
  iconDownload = faDownload;
  iconPlay = faPlay;

  ngOnInit() {
    const albumId = this.route.snapshot.paramMap.get('id');
    if (albumId) {
      this.searchService.getAlbumAndSongs(albumId).subscribe({
        next: (response) => {
          console.log('Response:', response);
          
          this.listSongs = response.songs.items;
          this.infoAlbum = response.album;
        },
        error: (error) => {
          console.error('Error fetching songs:', error);
        },
      });
    }
  }
  convertMsToMinutesAndSeconds(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
