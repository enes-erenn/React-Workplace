import styles from "./App.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ErrorDisplayer from "./ErrorDisplayer.js";

function App() {
  const [error, setError] = useState();

  const errorHandler = () => {
    document.getElementById("backdrop-root").style.display = "block";
    setError({
      title: "Invalid request",
      message: "Please check here again later.",
    });
  };

  const errorConfirm = () => {
    setError(null);
    document.getElementById("backdrop-root").style.display = "none";
  };

  return (
    <section className={styles.App}>
      {error && (
        <ErrorDisplayer
          title={error.title}
          message={error.message}
          onConfirm={errorConfirm}
        />
      )}
      <article>
        <Link to="/contacts">
          <div className={styles.works}>
            <h3>Contacts App</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/Contacts%20App/contacts-app.png"
              alt="Contacts App"
              title="Contacts App"
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="/weatherapp">
          <div className={styles.works}>
            <h3>Weather App</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/Weather%20App/weather-app.png"
              alt="Weather App"
              title="Weather App"
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="/expensesapp">
          <div className={styles.works}>
            <h3>Expenses App</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/Expenses%20App/expenses-app.png"
              alt="Expenses App"
              title="Expenses App"
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="/adduserapp">
          <div className={styles.works}>
            <h3>Add User App</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/AddUser%20App/adduser-app.png"
              alt="Add User App"
              title="Add User App"
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3>5</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3>6</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3>7</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3>8</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3>9</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3>10</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3>11</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3>12</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3>13</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3>14</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3>15</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>
    </section>
  );
}

export default App;
