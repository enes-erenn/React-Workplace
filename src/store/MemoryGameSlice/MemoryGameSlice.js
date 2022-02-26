import { createSlice } from "@reduxjs/toolkit";

export const MemoryGameSlice = createSlice({
  name: "cards",
  initialState: {
    items: [],
    slots: 2,
    firstSlot: null,
    secondSlot: null,
    points: 0,
    win: false,
  },

  reducers: {
    shuffle: (state, action) => {
      state.items = action.payload.shuffledItems;
      state.points = 0;
      state.firstSlot = null;
      state.secondSlot = null;
      state.slots = 2;
    },
    setState: (state, action) => {
      state.items[action.payload.index].isLocked === true
        ? (state.items[action.payload.index].isActive = true)
        : (state.items[action.payload.index].isActive =
            !state.items[action.payload.index].isActive);
      if (state.slots === 2) {
        state.firstSlot = action.payload.index;
        state.slots = state.slots - 1;
      } else if (state.slots === 1) {
        state.secondSlot = action.payload.index;
        state.slots = state.slots - 1;
        if (
          state.items[state.firstSlot].title ===
            state.items[state.secondSlot].title &&
          state.firstSlot !== state.secondSlot
        ) {
          if (
            state.items[state.firstSlot].isLocked === false &&
            state.items[state.secondSlot].isLocked === false
          ) {
            state.points = state.points + 50;
          }
          state.items[state.firstSlot].isLocked = true;
          state.items[state.secondSlot].isLocked = true;
        } else {
          state.points = state.points - 10;
        }
      } else {
        state.items[state.firstSlot].isLocked === true
          ? (state.items[state.firstSlot].isActive = true)
          : (state.items[state.firstSlot].isActive =
              !state.items[state.firstSlot].isActive);
        state.items[state.secondSlot].isLocked === true
          ? (state.items[state.secondSlot].isActive = true)
          : (state.items[state.secondSlot].isActive =
              !state.items[state.secondSlot].isActive);
        state.slots = 2;
        state.firstSlot = action.payload.index;
        state.slots = state.slots - 1;
      }
      state.items.every((item) => item.isLocked === true)
        ? (state.win = true)
        : (state.win = false);
    },
  },
});

export const { setState, shuffle } = MemoryGameSlice.actions;
export default MemoryGameSlice.reducer;
