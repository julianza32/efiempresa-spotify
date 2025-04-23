import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { Album, Artist } from '../../../types/results';
import { InfoAlbumComponent } from "../../components/info-album/info-album.component";

@Component({
  selector: 'app-list-albums',
  imports: [InfoAlbumComponent],
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.scss']
})
export class ListAlbumsComponent implements OnInit {
  albumId: string | null = null;
  private searchService = inject(SearchService);

  constructor(private route: ActivatedRoute) {}

  listAlbums: Album[] = [];
  artist: Artist = {} as Artist;
  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id');

    if (this.albumId) {
      this.searchService.getArtistAndAlbums(this.albumId).subscribe({
        next: (response) => {
          console.log('Response:', response);
          
          this.listAlbums = response.albums.items;
          this.artist = response.artist;
        },
        error: (error) => {
          console.error('Error fetching albums:', error);
        },
      });
    }

  }
}