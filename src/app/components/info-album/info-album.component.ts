import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Album } from '../../../types/results';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-album',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './info-album.component.html',
  styleUrl: './info-album.component.scss'
})
export class InfoAlbumComponent {
iconPlay = faPlayCircle;
@Input() albums: Album[] = [];
@Input() title: string = '';
private router =  inject( Router);

navigateToSongOfAlbum(albumId: string) {
  this.router.navigate(['/album', albumId]);
}

}
