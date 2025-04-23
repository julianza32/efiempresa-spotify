import { Component } from '@angular/core';
import { LayoutNavComponent } from "../../components/layout-nav/layout-nav.component";
import { PlayerButtonsComponent } from "../../components/player-buttons/player-buttons.component";
import { faHeart, faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { INavItems } from '../../../types/navItems';

@Component({
  selector: 'app-index',
  imports: [LayoutNavComponent, PlayerButtonsComponent, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {
  navItems: INavItems[] = [
    {
      title: 'Home',
      route: '/home',
      icon: faHome,
      isActive: true,
      isDisabled: false,
      imageUrl: null,
    },
    {
      title: 'Search',
      route: '/search',
      icon: faMagnifyingGlass
,
      imageUrl: null,
      isActive: false,
      isDisabled: false,
    },
  ];
}
