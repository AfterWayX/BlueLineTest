export interface MoviesQueryInterface {
  year?: number;
  id?: string;

  name?: string;
  genre?: string;

  page?: number;
  limit?: number;
}
