import { Component } from '@angular/core';
import { LayoutNavComponent } from '../../components/layout-nav/layout-nav.component';
import { PlayerButtonsComponent } from '../../components/player-buttons/player-buttons.component';
import { RouterModule } from '@angular/router';
import { NavItems } from '../../../types/navItems';
import {  faHeart, faHome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [LayoutNavComponent, PlayerButtonsComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  navItems: NavItems[] = [
    {
      title: 'Home',
      route: '',
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
    {
      title: 'Liked Songs',
      route: '/liked-songs',
      icon: faHeart,
      imageUrl: null,
      isActive: false,
      isDisabled: false,
    },
    {
      title: 'Your Library',
      route: '/your-library',
      icon:null,
      imageUrl: null,
      isActive: false,
      isDisabled: false,
    },
  ];
}
