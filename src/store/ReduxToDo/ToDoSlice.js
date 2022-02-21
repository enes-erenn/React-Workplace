import { createSlice } from "@reduxjs/toolkit";

export const ToDoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    activeFilter: "all",
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
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => item.completed === false);
      state.items = filtered;
    },
  },
});

export const selectFilteredTodos = (state) => {
  if (state.todos.activeFilter === "all") {
    return state.todos.items;
  }
  return state.todos.items.filter((todo) =>
    state.todos.activeFilter === "active"
      ? todo.completed === false
      : todo.completed === true
  );
};
export const selectActiveFilter = (state) => state.todos.activeFilter;
export const selectTodos = (state) => state.todos.items;
export const { addToDo, toggle, remove, changeActiveFilter, clearCompleted } =
  ToDoSlice.actions;
export default ToDoSlice.reducer;
