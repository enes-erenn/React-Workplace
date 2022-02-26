import Cards from "./Cards/Cards.js";
import styles from "./MemoryGameApp.module.css";
import Button from "../Button/Button.js";

const MemoryGameApp = () => {
  return (
    <div className={styles.container}>
      <Button />
      <Cards />
    </div>
  );
};

export default MemoryGameApp;
