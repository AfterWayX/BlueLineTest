import styles from "../../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Filter = () => {
  const [fieldQuery, setFieldQuery] = useState("");
  const [fieldFilter, setFieldFilter] = useState("field_title");

  const router = useRouter();
  useEffect(() => {
    const query = router.query;
    const fq =
      String(query?.filter_query!) !== "undefined"
        ? String(query?.filter_query!)
        : "";
    const ff =
      String(query?.filter_field!) !== "undefined"
        ? String(query?.filter_field!)
        : "field_title";
    setFieldQuery(fq);
    setFieldFilter(ff);
  }, []);

  useEffect(() => {
    router.push(`?filter_field=${fieldFilter}&filter_query=${fieldQuery}`);
  }, [fieldQuery, fieldFilter]);

  return (
    <div className={styles.filter}>
      <div className={styles.select}>
        <p>Filter by:</p>
        <select
          name="fields"
          id="fields"
          form="fieldsform"
          onChange={(e) => setFieldFilter(e.target.value)}
        >
          <option value="movie_title">Title</option>
          <option value="movie_genre">Genre</option>
          <option value="movie_year">Year</option>
        </select>
      </div>
      <input
        type="text"
        onChange={(e) => setFieldQuery(e.target.value)}
        placeholder={`type here to filter`}
        value={fieldQuery}
      />
    </div>
  );
};
