import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../../../store/CharactersSlice/CharactersSlice.js";
import styles from "./BreakingBadApp.module.css";
import { Link, Router } from "react-router-dom";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/breakingbadcharacters">Characters</Link>
          </li>
          <li>
            <Link to="/breakingbadcharacters/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
        <h1>Characters</h1>

        <div className={styles.characters}>
          {characters.map((character) => (
            <Link to={`/char/${character.char_id}`}>
              <div key={character.char_id}>
                <img
                  className={styles.image}
                  alt={character.name}
                  src={character.img}
                ></img>
                <p>{character.name}</p>
              </div>
            </Link>
          ))}
        </div>
        {status === "loading" && <p>Loading...</p>}
        {hasNextPage && status !== "loading" && (
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            Load More ({nextPage})
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
