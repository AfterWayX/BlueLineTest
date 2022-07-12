import type { NextApiRequest, NextApiResponse } from "next";
import { MovieInterface } from "../../src/interfaces/movie.interface";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieInterface[] | any>
) {
  const dates: MovieInterface[] = require("../../src/MOCK_DATA.json");
  const { limit, skip, filter_field, filter_query } = req.query;
  const f_field = String(filter_field);
  const fDates = filter_field
    ? dates
        .map((el: any) =>
          String(el[f_field])
            .toLocaleLowerCase()
            .includes(String(filter_query).toLocaleLowerCase())
            ? el
            : null
        )
        .filter((el) => el)
    : dates;
  const end = Number(skip) + Number(limit);
  const nDates: MovieInterface[] = fDates.slice(Number(skip), end);
  res.status(200).json(nDates);
}
