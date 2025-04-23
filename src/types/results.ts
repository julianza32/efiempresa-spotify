export interface IResponseSearch {
  tracks: TrackSearchResults;
  albums: AlbumSearchResults;
  artists: ArtistSearchResults;
}

export interface TrackSearchResults {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: Track[];
}

export interface AlbumSearchResults {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: Album[];
}

export interface ArtistSearchResults {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: Artist[];
}

export interface Track {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: 'track';
  uri: string;
}

export interface Album {
  album_type: 'album' | 'single' | 'compilation';
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: 'year' | 'month' | 'day';
  type: 'album';
  uri: string;
  artists: Artist[];
}

export interface Artist {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];

  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface ExternalIds {
  isrc?: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}



export interface SpotifyCategoryIcon {
  height: number;
  url: string;
  width: number;
}

export interface SpotifyCategoryItem {
  href: string;
  id: string;
  icons: SpotifyCategoryIcon[];
  name: string;
}

export interface SpotifyCategoryResponse {
  categories: {
    href: string;
    items: SpotifyCategoryItem[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  };
}



export interface SpotifyUserShowsResponse {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: SpotifyShowItem[];
}

export interface SpotifyShowItem {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: SpotifyOwner;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyOwner {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}


export interface SingleResponsePlaylist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: SpotifyOwner;
  public: boolean;
  snapshot_id: string;
  tracks: PlaylistTracks;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyOwner {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

export interface PlaylistTracks {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: PlaylistTrackItem[];
}
export interface PlaylistTrackItem {
  added_at: string;
  added_by: {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  track: {
    album: {
      album_type: string;
      total_tracks: number;
      available_markets: string[];
      external_urls: ExternalUrls;
      href: string;
      id: string;
      images: SpotifyImage[];
      name: string;
      release_date: string;
      release_date_precision: string;
      restrictions?: {
        reason: string;
      };
      type: string;
      uri: string;
      artists: SpotifyArtist[];
    };
    artists: SpotifyArtist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_playable: boolean;
    linked_from?: Record<string, unknown>;
    restrictions?: {
      reason: string;
    };
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
  };
}



export interface SpotifyUser {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

export interface SpotifyTrack {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  restrictions?: {
    reason: string;
  };
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface SpotifyAlbum {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: {
    reason: string;
  };
  type: string;
  uri: string;
  artists: SpotifyArtist[];
}

export interface SpotifyArtist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalIds {
  isrc?: string;
  ean?: string;
  upc?: string;
}
