import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [recentlyMovies, setRecentlyMovies] = useState([]);
  useEffect(() => {
    const lclStrgRcntlyMovies = localStorage.getItem("rcntlyMovies");
    const parsed = lclStrgRcntlyMovies ? JSON.parse(lclStrgRcntlyMovies!) : [];
    console.log(parsed);
    setRecentlyMovies(parsed);

    return () => {
      null;
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div>
        <h3>Previous viewed movies:</h3>
        <div className={styles.recently}>
          {recentlyMovies?.map((el: any) => (
            <Link key={el.id + el.movie_title} href={"/movie/" + el.id}>
              <a>
                <h4>{el.movie_title}</h4>
                <img src={el.movie_image} />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p>All rights reserved © copyright 2022</p>
      </div>
    </footer>
  );
};
