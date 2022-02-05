import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "../UI/Input.js";

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
