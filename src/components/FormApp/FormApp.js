// Components
import BasicForm from "./Form/BasicForm.js";
import Button from "../Button/Button.js";
// Styles
import styles from "./FormApp.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <BasicForm />
      </div>
      <Button />
    </div>
  );
}

export default App;
