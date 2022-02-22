import React from "react";
import "./index.css";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./components/contacts/Contacts.js";
import ExpensesApp from "./components/expenses/ExpensesApp.js";
import WeatherApp from "./components/WeatherApp/WeatherApp.js";
import AddUserApp from "./components/AddUserApp/AddUserApp.js";
import MyMealsApp from "./components/MyMeals/MyMealsApp.js";
import FormApp from "./components/FormApp/FormApp.js";
import ReduxCounterApp from "./components/ReduxCounter/ReduxCounterApp.js";
import { Provider } from "react-redux";
import store from "./store/store.js";
import ReduxToDo from "./components/ReduxToDo/ReduxToDoApp.js";
import ReduxNotes from "./components/NotesApp/NotesApp.js";
import BreakingBadCharacters from "./components/BreakingBadCharacters/pages/Home/BreakingBadApp.js";
import Detail from "./components/BreakingBadCharacters/pages/Details/CharDetails.js";
import Quotes from "./components/BreakingBadCharacters/pages/Quotes/BreakingBadQuotes.js";

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="expensesapp" element={<ExpensesApp />} />
        <Route path="weatherapp" element={<WeatherApp />} />
        <Route path="adduserapp" element={<AddUserApp />} />
        <Route path="adduserapp" element={<AddUserApp />} />
        <Route path="mymealsapp" element={<MyMealsApp />} />
        <Route path="formapp" element={<FormApp />} />
        <Route path="reduxcounter" element={<ReduxCounterApp />} />
        <Route path="reduxtodo" element={<ReduxToDo />} />
        <Route path="reduxnotes" element={<ReduxNotes />} />
        <Route
          path="breakingbadcharacters"
          element={<BreakingBadCharacters />}
        />
        <Route path="/char/:char_id" element={<Detail />} />
        <Route path="/breakingbadcharacters/quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
