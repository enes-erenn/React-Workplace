import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../../../store/CharactersSlice/CharactersSlice.js";
import styles from "./BreakingBadApp.module.css";

const Home = () => {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className={styles.container}>
      <h1>Characters</h1>

      <div className={styles.characters}>
        {characters.map((character) => (
          <div key={character.char_id}>
            <img
              className={styles.image}
              alt={character.name}
              src={character.img}
            ></img>
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
