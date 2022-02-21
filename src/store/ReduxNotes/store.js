import { configureStore } from "@reduxjs/toolkit";
import NotesSlice from "./ReduxNotes/NotesSlice.js";

export const store = configureStore({
  reducer: { notes: NotesSlice },
});
