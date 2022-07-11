import type { GetServerSideProps, NextPage } from "next";
import axios from "axios";

import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { MoviesService } from "../../src/services/Movies.Service";
import { MovieInterface } from "../../src/interfaces/movie.interface";

const Home = (props: MovieInterface) => {
  const { id, name, genre, year } = props;
  return (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content={
            "Movie " + name + ", it was filmed " + year + " in genre " + genre
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Name of movie <a href="https://nextjs.org">{name}</a>
        </h1>

        <p className={styles.description}>
          Genre: <code className={styles.code}>{genre}</code>
        </p>

        <p className={styles.description}>
          Year: <code className={styles.code}>{year}</code>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await MoviesService.movie(String(context.params!.slug));
  return { props: res.data };
};
