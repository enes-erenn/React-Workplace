import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../../../store/CharactersSlice/CharactersSlice.js";
import styles from "./BreakingBadApp.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();
  console.log(characters);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li className={styles.header}>Breaking Bad</li>
          <div className={styles.pages}>
            <li className={styles.link}>
              <Link className={styles.link} to="/breakingbadcharacters">
                Characters
              </Link>
            </li>
            <li className={styles.link}>
              <Link className={styles.link} to="/breakingbadcharacters/quotes">
                Quotes
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <div className={styles.characters}>
        {characters.map((character) => (
          <Link className={styles.char} to={`/char/${character.char_id}`}>
            <div key={character.char_id}>
              <img
                className={styles.image}
                alt={character.name}
                src={character.img}
              ></img>
              <p className={styles.charName}>{character.name}</p>
            </div>
          </Link>
        ))}
      </div>
      {status === "loading" && <p className={styles.loading}>Loading...</p>}
      {hasNextPage && status !== "loading" && (
        <button
          className={styles.load}
          onClick={() => dispatch(fetchCharacters(nextPage))}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Home;
