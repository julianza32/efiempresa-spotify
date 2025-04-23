import { Component, inject } from '@angular/core';
import { ButtonLoginAvatarComponent } from "../../components/button-login-avatar/button-login-avatar.component";
import { SearchService } from '../../services/search.service';
import { Album, SpotifyCategoryItem } from '../../../types/results';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ButtonLoginAvatarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  private searchService = inject(SearchService);
  
  itemsCategories: SpotifyCategoryItem[] = [];
  itemsReleases: Album[] = [];


  ngOnInit() {
    this.getCategories();
    this.getNewReleases();
  }

  getCategories() {
    this.searchService.getCategories().subscribe({
      next: (data) => {
        this.itemsCategories = data.categories.items;
      },
      error: (err) => {
        console.error('Error fetching new releases:', err);
      },
    });
  }

  getNewReleases() {
    this.searchService.getNewReleases().subscribe({
      next: (data) => {
        this.itemsReleases = data.albums.items;
      },
      error: (err) => {
        console.error('Error fetching new releases:', err);
      },
    });
  }
}
