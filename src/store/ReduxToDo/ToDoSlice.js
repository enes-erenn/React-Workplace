import { createSlice } from "@reduxjs/toolkit";

export const ToDoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: 1,
        title: "Go to the GYM",
      },
      {
        id: 2,
        title: "Learn React",
      },
    ],
  },
  reducers: {},
});

export default ToDoSlice.reducer;
