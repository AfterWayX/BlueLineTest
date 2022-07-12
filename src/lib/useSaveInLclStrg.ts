import { MovieInterface } from "../interfaces/movie.interface";

export function useSaveInLclStrg(el: MovieInterface) {
  const oldRcntlyMovies = JSON.parse(localStorage.getItem("rcntlyMovies")!);
  const nOrm =
    oldRcntlyMovies?.length > 2 ? oldRcntlyMovies.slice(1, 3) : oldRcntlyMovies;
  return nOrm
    ? localStorage.setItem("rcntlyMovies", JSON.stringify([...nOrm, el]))
    : localStorage.setItem("rcntlyMovies", JSON.stringify([el]));
}
