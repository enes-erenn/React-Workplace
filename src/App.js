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
      <article className={styles.pages}>
        <Link to="/contacts">
          <div className={styles.works}>
            <h3 className={styles.headers}>Contacts App</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/Contacts%20App/contacts-app.png"
              alt="Contacts App"
              title="Contacts App"
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="/weatherapp">
          <div className={styles.works}>
            <h3 className={styles.headers}>Howeather - Weather App</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/Weather%20App/weather-app.png"
              alt="Weather App"
              title="Weather App"
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="/expensesapp">
          <div className={styles.works}>
            <h3 className={styles.headers}>Expenses App</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/Expenses%20App/expenses-app.png"
              alt="Expenses App"
              title="Expenses App"
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="/adduserapp">
          <div className={styles.works}>
            <h3 className={styles.headers}>Add User App</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/AddUser%20App/adduser-app.png"
              alt="Add User App"
              title="Add User App"
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="mymealsapp">
          <div className={styles.works}>
            <h3 className={styles.headers}>My Meals - Food Order App</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/MyMeals%20App/mymeals-app.png"
              alt="My Meals"
              title="My Meals"
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="formapp">
          <div className={styles.works}>
            <h3 className={styles.headers}>Form App</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/FormApp/FormApp.png"
              alt="Form App"
              title="Form App"
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="reduxcounter">
          <div className={styles.works}>
            <h3 className={styles.headers}>ReduxCounter</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/ReduxCounter/CounterApp.png"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="reduxtodo">
          <div className={styles.works}>
            <h3 className={styles.headers}>ReduxToDo</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/ReduxToDoApp/ToDoApp.png"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="reduxnotes">
          <div className={styles.works}>
            <h3 className={styles.headers}>Notes App</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/NotesApp/NotesApp.png"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="breakingbadcharacters">
          <div className={styles.works}>
            <h3 className={styles.headers}>Breaking Bad Characters</h3>
            <img
              class={styles.imgs}
              src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/BreakingBadApp/BreakingBadApp.png"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3 className={styles.headers}>11</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3 className={styles.headers}>12</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3 className={styles.headers}>13</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3 className={styles.headers}>14</h3>
            <img
              class={styles.imgs}
              src="https://images.pexels.com/photos/4439444/pexels-photo-4439444.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </Link>
      </article>

      <article className={styles.pages}>
        <Link to="" onClick={errorHandler}>
          <div className={styles.works}>
            <h3 className={styles.headers}>15</h3>
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
