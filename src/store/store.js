import { configureStore } from "@reduxjs/toolkit";
import ToDoSlice from "./ReduxToDo/ToDoSlice.js";

export const store = configureStore({
  reducer: { todos: ToDoSlice },
});
