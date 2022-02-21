import { createSlice } from "@reduxjs/toolkit";

export const ToDoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addToDo: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    remove: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
  },
});
export const { addToDo, toggle, remove } = ToDoSlice.actions;
export default ToDoSlice.reducer;
