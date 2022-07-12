import type { GetServerSideProps, NextPage } from "next";
import axios from "axios";

import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { MoviesService } from "../../src/services/Movies.Service";
import { MovieInterface } from "../../src/interfaces/movie.interface";
import { Header } from "../../src/components/Header/Header";
import { Footer } from "../../src/components/Footer/Footer";

const Home = (props: MovieInterface) => {
  const {
    id,
    movie_title,
    movie_genre,
    movie_year,
    movie_image,
    movie_description,
    movie_rating,
  } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>{movie_title}</title>
        <meta
          name="description"
          content={
            "Movie " +
            movie_title +
            ", it was filmed " +
            movie_year +
            " in genre " +
            movie_genre
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main_column}>
        <Header isMoviePage />
        <div className={styles.content}>
          <h1 className={styles.title}>
            Name of movie <a href="https://nextjs.org">{movie_title}</a>
          </h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <img
              className={styles.image_366px}
              src={movie_image}
              alt={movie_title}
            />

            <div>
              <p className={styles.description}>
                Rating: <code className={styles.code}>{movie_rating}</code>
              </p>
              <p className={styles.description}>
                Description:{" "}
                <code className={styles.code}>{movie_description}</code>
              </p>

              <p className={styles.description}>
                Genre: <code className={styles.code}>{movie_genre}</code>
              </p>

              <p className={styles.description}>
                Year: <code className={styles.code}>{movie_year}</code>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await MoviesService.movie(String(context.params!.slug));
  return { props: res.data };
};
