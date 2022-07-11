import type { NextApiRequest, NextApiResponse } from "next";
import { dates } from "../../src/mock";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    id: string;
    name: string;
    year: number;
    genre: string;
  }>
) {
  const { id } = req.query;
  const data = dates.find((el) => el.id === id);
  res.status(200).json(data!);
}
