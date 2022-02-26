// Packages and Dependencies
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CountUp from "react-countup";
import { nanoid } from "nanoid";
// Styles
import styles from "./SpendMoneyApp.module.css";
// Components
import { changeAmount } from "../../store/SpendMoneySlice/SpendMoneySlice.js";
import Button from "../Button/Button.js";

const SpendMoneyApp = () => {
  const items = useSelector((state) => state.items.items);
  const budget = useSelector((state) => state.items.budget);
  const loading = useSelector((state) => state.items.loading);
  const dispatch = useDispatch();
  const budgetSnapshot = 0;
  const [amount, setAmount] = useState(items.map((e) => e.amount));

  const changeHandler = (amount, item) => {
    const _temp = [...amount];
    const id = item.id;
    _temp[id - 1] = amount;
    amount = amount[0] === "0" ? (amount.length > 1 ? amount[1] : 0) : amount;
    amount =
      budget < item.price * amount
        ? amount > item.amount
          ? String(Math.floor(budget / item.price) + item.amount)
          : amount
        : amount;
    amount = amount === "" ? 0 : amount;

    amount = amount >= 0 ? amount : 0;
    _temp[id - 1] = amount;
    amount = parseInt(amount);

    setAmount(_temp);
    dispatch(changeAmount({ id: id, amount: amount }));
  };

  const buyHandler = (item) => {
    const _temp = [...amount];
    const id = item.id;
    _temp[id - 1] = item.amount + 1;
    setAmount(_temp);
    dispatch(changeAmount({ id: item.id, amount: item.amount + 1 }));
  };
  const sellHandler = (item) => {
    const _temp = [...amount];
    const id = item.id;
    _temp[id - 1] = item.amount - 1;
    setAmount(_temp);
    dispatch(changeAmount({ id: item.id, amount: item.amount - 1 }));
  };
  return (
    <div className={styles.container}>
      <Button />
      <div className={styles.app}>
        <header className={styles.header}>
          <img
            className={styles.photo}
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHqRRhVsnaziA/profile-displayphoto-shrink_100_100/0/1626063510328?e=1651104000&v=beta&t=Z-tyMSjpKQ7fO9ONgacZ2fT27hfWgJxvKGPJSfx9bVk"
            alt=""
          />
          <h1 className={styles.heading}>Spend Bill Gates' Money</h1>
          <CountUp
            className={styles.money}
            start={budgetSnapshot}
            end={budget}
            preserveValue={true}
            duration={1}
            separator=","
            decimals={0}
            decimal=","
            prefix="$"
          />
        </header>
        <div className={styles.items}>
          {items.map((item) => (
            <div className={styles.item} key={item.id}>
              <div>
                <img className={styles.img} src={item.img} alt="" />
                <h6 className={styles.title}>{item.title}</h6>
                <p className={styles.price}>{`$${new Intl.NumberFormat(
                  "en-US"
                ).format(item.price)}`}</p>
              </div>
              <div className={styles.controls}>
                <button
                  className={
                    item.amount > 0
                      ? `${styles.button} ${styles.sell}`
                      : `${styles.button} } ${styles.disable}`
                  }
                  onClick={() => sellHandler(item)}
                  disabled={loading || item.amount === 0}
                >
                  Sell
                </button>
                <input
                  className={styles.count}
                  type="number"
                  value={amount[item.id - 1]}
                  onChange={(e) => changeHandler(e.target.value, item)}
                  min="0"
                  disabled={loading}
                ></input>
                <button
                  className={
                    budget > item.price
                      ? `${styles.button} ${styles.buy}`
                      : `${styles.button} ${styles.disable}`
                  }
                  onClick={() => buyHandler(item)}
                  disabled={loading || budget < item.price}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.receipt_container}>
          <h3 className={styles.receipt_title}>Your Receipt</h3>
          {items.map((item) => {
            return item.amount > 0 ? (
              <div className={styles.receipt} key={nanoid()}>
                <p>{item.title}</p>
                <p>{item.amount}</p>{" "}
                <p>{`$${new Intl.NumberFormat("en-US").format(
                  item.price * item.amount
                )}`}</p>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SpendMoneyApp;
