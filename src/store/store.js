import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./ReduxToDo/ToDoSlice.js";
import NotesSlice from "./ReduxNotes/NotesSlice.js";
import CharactersSlice from "./CharactersSlice/CharactersSlice.js";
import CounterSlice from "./CounterSlice/CounterSlice.js";

export const store = configureStore({
  reducer: {
    todos: ToDoSlice,
    counter: CounterSlice,
    notes: NotesSlice,
    characters: CharactersSlice,
  },
});
export default store;
