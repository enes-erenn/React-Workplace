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
  },
});
export const { addToDo } = ToDoSlice.actions;
export default ToDoSlice.reducer;
