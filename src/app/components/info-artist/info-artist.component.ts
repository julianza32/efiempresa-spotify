import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Artist } from '../../../types/results';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-artist',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './info-artist.component.html',
  styleUrl: './info-artist.component.scss'
})
export class InfoArtistComponent {

  iconPlay = faPlayCircle;
  @Input() artists: Artist[] = [];
  @Input() title: string = '';
  private router = inject(Router);

  navigateAlbum(artistId: string) {
    this.router.navigate(['/artist', artistId]);
  }
}
