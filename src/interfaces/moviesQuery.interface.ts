export interface MoviesQueryInterface {
  year?: number;

  name?: string;
  genre?: string;

  page?: number;
  limit?: number;
}
