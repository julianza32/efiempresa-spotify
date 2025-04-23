import { Component, Input } from '@angular/core';
import { Track } from '../../../types/results';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-music',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './info-music.component.html',
  styleUrl: './info-music.component.scss'
})
export class InfoMusicComponent {
  iconPlay = faPlayCircle
@Input() tracks: Track[]=[];
@Input() title: string = '';
}
