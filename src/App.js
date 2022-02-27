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
    <div className={styles.App}>
      <h3 className={styles.header}>React Workplace - Enes Eren</h3>
      <section className={styles.section}>
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
          <Link to="spendmoney">
            <div className={styles.works}>
              <h3 className={styles.headers}>Spend Money App</h3>
              <img
                class={styles.imgs}
                src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/SpendMoneyApp/SpendMoneyApp.png"
                alt=""
              />
            </div>
          </Link>
        </article>

        <article className={styles.pages}>
          <Link to="reduxcart">
            <div className={styles.works}>
              <h3 className={styles.headers}>ReduxCart</h3>
              <img
                class={styles.imgs}
                src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/ReduxCart/ReduxCart.png"
                alt=""
              />
            </div>
          </Link>
        </article>

        <article className={styles.pages}>
          <Link to="memorygame">
            <div className={styles.works}>
              <h3 className={styles.headers}>Memory Game</h3>
              <img
                class={styles.imgs}
                src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/MemoryGame/MemoryGame.png"
                alt=""
              />
            </div>
          </Link>
        </article>

        <article className={styles.pages}>
          <Link to="reactauth">
            <div className={styles.works}>
              <h3 className={styles.headers}>React Auth App</h3>
              <img
                class={styles.imgs}
                src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/ReactAuth/ReactAuth.png"
                alt=""
              />
            </div>
          </Link>
        </article>

        <article className={styles.pages}>
          <Link to="textgenerator">
            <div className={styles.works}>
              <h3 className={styles.headers}>Text Generator App</h3>
              <img
                class={styles.imgs}
                src="https://raw.githubusercontent.com/thenesern/React-Workplace/master/src/components/Assets/Images/TextGenerator/TextGenerator.png"
                alt=""
              />
            </div>
          </Link>
        </article>
      </section>
    </div>
  );
}

export default App;
