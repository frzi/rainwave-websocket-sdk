import { Album } from "./album";
import { AlbumWithDetail } from "./albumWithDetail";
import { BooleanResult } from "./booleanResult";
import { SongBase } from "./songBase";
import { Station } from "./station";

export interface UpdatedAlbumRating {
  sid: Station;
  id: number;
  rating_user: Album["rating_user"];
  rating_complete: AlbumWithDetail["rating_complete"];
}

export interface RateResult extends BooleanResult {
  updated_album_ratings: UpdatedAlbumRating[];
  song_id: SongBase["id"];
  rating_user: SongBase["rating_user"];
}
