import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/index/index.component').then((m) => m.IndexComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./pages/search/search.component').then(
            (m) => m.SearchComponent
          ),
      },
   
      {
        path: 'artist/:id',
        loadComponent: () =>
          import('./pages/list-albums/list-albums.component').then(
            (m) => m.ListAlbumsComponent
          ),
      },
      {
        path: 'album/:id',
        loadComponent: () =>
          import('./pages/list-songs/list-songs.component').then(
            (m) => m.ListSongsComponent
          ),
      },{
        path: 'playlist/:id',
        loadComponent: () =>
          import('./pages/playlist/playlist.component').then(
            (m) => m.PlaylistComponent
          ),
      },
      {
        path: 'not-found',
        loadComponent: () =>
          import('./pages/not-found/not-found.component').then(
            (m) => m.NotFoundComponent
          ),
      }


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
  { path: '**', redirectTo: 'home' },
];
