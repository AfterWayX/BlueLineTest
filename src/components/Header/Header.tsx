import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import { Filter } from "../Filter/Filter";

export const Header = ({ isMoviePage }: { isMoviePage?: boolean }) => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">Nletfix</Link>
      </h1>
      {!isMoviePage && <Filter />}
    </header>
  );
};
