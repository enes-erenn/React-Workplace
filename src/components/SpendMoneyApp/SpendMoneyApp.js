import React from "react";
import styles from "./SpendMoneyApp.module.css";
import { useSelector, useDispatch } from "react-redux";
import { buy, sell } from "../../store/SpendMoneySlice/SpendMoneySlice.js";

const SpendMoneyApp = () => {
  const items = useSelector((state) => state.items.items);
  const budget = useSelector((state) => state.items.budget);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <header className={styles.header}>
          <img
            className={styles.photo}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHqRRhVsnaziA/profile-displayphoto-shrink_100_100/0/1626063510328?e=1651104000&v=beta&t=Z-tyMSjpKQ7fO9ONgacZ2fT27hfWgJxvKGPJSfx9bVk"
            alt=""
          />
          <h1 className={styles.heading}>Spend Bill Gates' Money</h1>
          <p className={styles.money}>{`$${new Intl.NumberFormat(
            "en-US"
          ).format(budget)}`}</p>
        </header>
        <div className={styles.items}>
          {items.map((item) => (
            <div className={styles.item} key={item.price}>
              <div>
                <img className={styles.img} src={item.img} alt="" />
                <h6 className={styles.title}>{item.title}</h6>
                <p className={styles.price}>{`$${new Intl.NumberFormat(
                  "en-US"
                ).format(item.price)}`}</p>
              </div>
              <div className={styles.controls}>
                <button
                  className={`${styles.button} ${styles.sell}`}
                  onClick={() => dispatch(sell(item.price))}
                >
                  Sell
                </button>
                <input className={styles.count} type="number"></input>
                <button
                  className={`${styles.button} ${styles.buy}`}
                  onClick={() => dispatch(buy(item.price))}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpendMoneyApp;
