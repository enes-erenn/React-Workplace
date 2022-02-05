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

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="expensesapp" element={<ExpensesApp />} />
      <Route path="weatherapp" element={<WeatherApp />} />
      <Route path="adduserapp" element={<AddUserApp />} />
      <Route path="adduserapp" element={<AddUserApp />} />
      <Route path="mymealsapp" element={<MyMealsApp />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
