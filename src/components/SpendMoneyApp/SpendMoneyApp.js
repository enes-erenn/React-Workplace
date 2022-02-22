import React from "react";
import styles from "./SpendMoneyApp.module.css";

const SpendMoneyApp = () => {
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
          <p className={styles.money}>$100,000,000,000</p>
        </header>
        <div className={styles.items}>
          <div className={styles.item}>
            <div>
              <img
                className={styles.img}
                src="https://neal.fun/spend/images/big-mac.jpg"
                alt=""
              />
              <h6 className={styles.title}>Big Mac</h6>
              <p className={styles.price}>$2</p>
            </div>

            <div className={styles.controls}>
              <button className={`${styles.button} ${styles.sell}`}>
                Sell
              </button>
              <input className={styles.count} type="number"></input>
              <button className={`${styles.button} ${styles.buy}`}>Buy</button>
            </div>
          </div>
          <div className={styles.item}>
            <div>
              <img
                className={styles.img}
                src="https://neal.fun/spend/images/big-mac.jpg"
                alt=""
              />
              <h6 className={styles.title}>Big Mac</h6>
              <p className={styles.price}>$2</p>
            </div>

            <div className={styles.controls}>
              <button className={`${styles.button} ${styles.sell}`}>
                Sell
              </button>
              <input className={styles.count} type="number"></input>
              <button className={`${styles.button} ${styles.buy}`}>Buy</button>
            </div>
          </div>
          <div className={styles.item}>
            <div>
              <img
                className={styles.img}
                src="https://neal.fun/spend/images/big-mac.jpg"
                alt=""
              />
              <h6 className={styles.title}>Big Mac</h6>
              <p className={styles.price}>$2</p>
            </div>

            <div className={styles.controls}>
              <button className={`${styles.button} ${styles.sell}`}>
                Sell
              </button>
              <input className={styles.count} type="number"></input>
              <button className={`${styles.button} ${styles.buy}`}>Buy</button>
            </div>
          </div>
          <div className={styles.item}>
            <div>
              <img
                className={styles.img}
                src="https://neal.fun/spend/images/big-mac.jpg"
                alt=""
              />
              <h6 className={styles.title}>Big Mac</h6>
              <p className={styles.price}>$2</p>
            </div>

            <div className={styles.controls}>
              <button className={`${styles.button} ${styles.sell}`}>
                Sell
              </button>
              <input className={styles.count} type="number"></input>
              <button className={`${styles.button} ${styles.buy}`}>Buy</button>
            </div>
          </div>
          <div className={styles.item}>
            <div>
              <img
                className={styles.img}
                src="https://neal.fun/spend/images/big-mac.jpg"
                alt=""
              />
              <h6 className={styles.title}>Big Mac</h6>
              <p className={styles.price}>$2</p>
            </div>

            <div className={styles.controls}>
              <button className={`${styles.button} ${styles.sell}`}>
                Sell
              </button>
              <input className={styles.count} type="number"></input>
              <button className={`${styles.button} ${styles.buy}`}>Buy</button>
            </div>
          </div>
          <div className={styles.item}>
            <div>
              <img
                className={styles.img}
                src="https://neal.fun/spend/images/big-mac.jpg"
                alt=""
              />
              <h6 className={styles.title}>Big Mac</h6>
              <p className={styles.price}>$2</p>
            </div>

            <div className={styles.controls}>
              <button className={`${styles.button} ${styles.sell}`}>
                Sell
              </button>
              <input className={styles.count} type="number"></input>
              <button className={`${styles.button} ${styles.buy}`}>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendMoneyApp;
