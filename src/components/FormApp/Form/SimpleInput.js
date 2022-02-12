import styles from "./SimpleInput.module.css";

const SimpleInput = (props) => {
  return (
    <form>
      <div className={styles["form-control"]}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles["form-actions"]}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
