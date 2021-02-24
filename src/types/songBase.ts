import { RatingUser } from ".";
import { Album } from "./album";
import { Artist } from "./artist";

export interface SongBase {
  albums: [Pick<Album, "id" | "name">];
  artists: Artist[];
  fave: boolean | null;
  id: number;
  length: number;
  link_text: string | null;
  rating_user: RatingUser;
  rating: number;
  title: string;
  url: string | null;
}
