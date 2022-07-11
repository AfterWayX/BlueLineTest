import type { NextApiRequest, NextApiResponse } from "next";
import { MovieInterface } from "../../src/interfaces/movie.interface";
import { dates } from "../../src/mock";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieInterface>
) {
  const { id } = req.query;
  const data = dates.find((el) => el.id === id);
  res.status(200).json(data!);
}
