import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./ReduxToDo/ToDoSlice.js";
import NotesSlice from "./ReduxNotes/NotesSlice.js";
import CharactersSlice from "./CharactersSlice/CharactersSlice.js";
import CounterSlice from "./CounterSlice/CounterSlice.js";
import QuotesSlice from "./QuotesSlice/QuotesSlice.js";
import SpendMoneySlice from "./SpendMoneySlice/SpendMoneySlice.js";

export const store = configureStore({
  reducer: {
    todos: ToDoSlice,
    counter: CounterSlice,
    notes: NotesSlice,
    characters: CharactersSlice,
    quotes: QuotesSlice,
    items: SpendMoneySlice,
  },
});
export default store;
