import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: 'search',
        loadComponent: () =>
          import('./pages/search/search.component').then(
            (m) => m.SearchComponent
          ),
      },
      {
        path: 'liked-songs',
        loadComponent: () =>
          import('./pages/liked-songs/liked-songs.component').then(
            (m) => m.LikedSongsComponent
          ),
      },
      {
        path: 'your-library',
        loadComponent: () =>
          import('./pages/your-library/your-library.component').then(
            (m) => m.YourLibraryComponent
          ),
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent),
  },

  {
    path: 'callback',
    loadComponent: () =>
      import('./pages/callback/callback.component').then(
        (m) => m.CallbackComponent
      ),
  },
];
