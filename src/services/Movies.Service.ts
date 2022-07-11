import axios from "axios";
import { MoviesQueryInterface } from "../interfaces/moviesQuery.interface";

const instance = axios.create({
  baseURL: `${process.env.API}/api`,
});

export class MoviesService {
  static movies(query: MoviesQueryInterface) {
    const { page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;

    return instance.get("/movies", {
      params: {
        ...query,
        skip,
      },
    });
  }

  static movie(id: string) {
    return instance.get("/", {
      params: {
        id,
      },
    });
  }
}
