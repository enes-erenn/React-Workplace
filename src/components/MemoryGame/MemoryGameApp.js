import Cards from "./Cards/Cards.js";
import styles from "./MemoryGameApp.module.css";

const MemoryGameApp = () => {
  return (
    <div className={styles.container}>
      <Cards />
    </div>
  );
};

export default MemoryGameApp;
