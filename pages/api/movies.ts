import type { NextApiRequest, NextApiResponse } from "next";
import { MovieInterface } from "../../src/interfaces/movie.interface";
import { dates } from "../../src/mock";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieInterface[]>
) {
  res.status(200).json(dates);
}
