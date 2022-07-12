import type { NextApiRequest, NextApiResponse } from "next";
import { MovieInterface } from "../../src/interfaces/movie.interface";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieInterface>
) {
  const dates = require("../../src/MOCK_DATA.json");
  const { id } = req.query;
  const data = dates.find((el: MovieInterface) => el.id === Number(id));
  res.status(200).json(data!);
}
