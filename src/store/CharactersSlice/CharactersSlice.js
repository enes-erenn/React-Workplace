import { createSlice } from "@reduxjs/toolkit";

export const CharactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [],
  },
  reducers: {},
});

export default CharactersSlice.reducer;
