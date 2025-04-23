import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward, faForward, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player-buttons',
  imports: [FontAwesomeModule],
  templateUrl: './player-buttons.component.html',
  styleUrl: './player-buttons.component.scss'
})
export class PlayerButtonsComponent {
iconBaack = faBackward;
iconPlay = faPlay;
iconForward = faForward;


}
