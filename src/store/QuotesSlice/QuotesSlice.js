import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllQuotes = createAsyncThunk("quotes/fetchAll", async () => {
  const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`);
  return res.data;
});

export const QuotesSlice = createSlice({
  name: "quotes",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchAllQuotes.fulfilled]: (state, action) => {
      state.status = "succeed";
      state.items = action.payload;
    },
    [fetchAllQuotes.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAllQuotes.error]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const quotesSelector = (state) => state.quotes.items;
export const statusSelector = (state) => state.quotes.status;
export const errorSelector = (state) => state.quotes.error;
export default QuotesSlice.reducer;
