import { createSlice } from "@reduxjs/toolkit";

export const SpendMoneySlice = createSlice({
  name: "items",
  initialState: {
    budget: 100000000000,
    items: [
      {
        id: 1,
        title: "Big Mac",
        price: 4,
        img: "https://neal.fun/spend/images/big-mac.jpg",
        amount: 0,
      },
      {
        id: 2,
        title: "Flip Flops",
        price: 6,
        img: "https://neal.fun/spend/images/flip-flops.jpg",
        amount: 0,
      },
      {
        id: 3,
        title: "Coca Cola Pack",
        price: 10,
        img: "https://neal.fun/spend/images/coca-cola-pack.jpg",
        amount: 0,
      },
      {
        id: 4,
        title: "Movie Ticket",
        price: 12,
        img: "https://neal.fun/spend/images/movie-ticket.jpg",
        amount: 0,
      },
      {
        id: 5,
        title: "Book",
        price: 15,
        img: "https://neal.fun/spend/images/book.jpg",
        amount: 0,
      },
      {
        id: 6,
        title: "Lobster Dinner",
        price: 45,
        img: "https://neal.fun/spend/images/lobster-dinner.jpg",
        amount: 0,
      },
      {
        id: 7,
        title: "Video Game",
        price: 60,
        img: "https://neal.fun/spend/images/video-game.jpg",
        amount: 0,
      },
      {
        id: 8,
        title: "Amazon Echo",
        price: 99,
        img: "https://neal.fun/spend/images/amazon-echo.jpg",
        amount: 0,
      },
      {
        id: 9,
        title: "Year of Netflix",
        price: 100,
        img: "https://neal.fun/spend/images/year-of-netflix.jpg",
        amount: 0,
      },
      {
        id: 10,
        title: "Air Jordans",
        price: 125,
        img: "https://neal.fun/spend/images/air-jordans.jpg",
        amount: 0,
      },
      {
        id: 11,
        title: "Airpods",
        price: 199,
        img: "https://neal.fun/spend/images/airpods.jpg",
        amount: 0,
      },
      {
        id: 12,
        title: "Gaming Console",
        price: 299,
        img: "https://neal.fun/spend/images/gaming-console.jpg",
        amount: 0,
      },
      {
        id: 13,
        title: "Drone",
        price: 350,
        img: "https://neal.fun/spend/images/drone.jpg",
        amount: 0,
      },
      {
        id: 14,
        title: "Smartphone",
        price: 699,
        img: "https://neal.fun/spend/images/smartphone.jpg",
        amount: 0,
      },
      {
        id: 15,
        title: "Bike",
        price: 800,
        img: "https://neal.fun/spend/images/bike.jpg",
        amount: 0,
      },
      {
        id: 16,
        title: "Luxury Wine",
        price: 7000,
        img: "https://neal.fun/spend/images/luxury-wine.jpg",
        amount: 0,
      },
      {
        id: 17,
        title: "Diamond Ring",
        price: 10000,
        img: "https://neal.fun/spend/images/diamond-ring.jpg",
        amount: 0,
      },
      {
        id: 18,
        title: "Jet Ski",
        price: 12000,
        img: "https://neal.fun/spend/images/jet-ski.jpg",
        amount: 0,
      },
      {
        id: 19,
        title: "Rolex",
        price: 15000,
        img: "https://neal.fun/spend/images/rolex.jpg",
        amount: 0,
      },
      {
        id: 20,
        title: "Tesla",
        price: 75000,
        img: "https://neal.fun/spend/images/tesla.jpg",
        amount: 0,
      },
      {
        id: 21,
        title: "Ferrari",
        price: 250000,
        img: "https://neal.fun/spend/images/ferrari.jpg",
        amount: 0,
      },
      {
        id: 22,
        title: "Single Family Home",
        price: 300000,
        img: "https://neal.fun/spend/images/single-family-home.jpg",
        amount: 0,
      },
      {
        id: 23,
        title: "Gold Bar",
        price: 700000,
        img: "https://neal.fun/spend/images/gold-bar.jpg",
        amount: 0,
      },
      {
        id: 24,
        title: "McDonalds Franchise",
        price: 1500000,
        img: "https://neal.fun/spend/images/mcdonalds-franchise.jpg",
        amount: 0,
      },
      {
        id: 25,
        title: "Yacht",
        price: 7500000,
        img: "https://neal.fun/spend/images/yacht.jpg",
        amount: 0,
      },
      {
        id: 26,
        title: "M1 Abrams",
        price: 8000000,
        img: "https://neal.fun/spend/images/m1-abrams.jpg",
        amount: 0,
      },
      {
        id: 27,
        title: "Formula 1 Car",
        price: 15000000,
        img: "https://neal.fun/spend/images/formula-1-car.jpg",
        amount: 0,
      },
      {
        id: 28,
        title: "Apache Helicopter",
        price: 31000000,
        img: "https://neal.fun/spend/images/apache-helicopter.jpg",
        amount: 0,
      },
      {
        id: 29,
        title: "Make a Movie",
        price: 100000000,
        img: "https://neal.fun/spend/images/make-a-movie.jpg",
        amount: 0,
      },
      {
        id: 30,
        title: "Boeing 747",
        price: 148000000,
        img: "https://neal.fun/spend/images/boeing-747.jpg",
        amount: 0,
      },
      {
        id: 31,
        title: "Mona Lisa",
        price: 780000000,
        img: "https://neal.fun/spend/images/mona-lisa.jpg",
        amount: 0,
      },
      {
        id: 32,
        title: "Cruise Ship",
        price: 930000000,
        img: "https://neal.fun/spend/images/cruise-ship.jpg",
        amount: 0,
      },
      {
        id: 33,
        title: "NBA Team",
        price: "2120000000",
        img: "https://neal.fun/spend/images/nba-team.jpg",
        amount: 0,
      },
    ],
    loading: false,
  },
  reducers: {
    changeAmount: (state, action) => {
      const id = action.payload.id;
      const amount = parseInt(action.payload.amount);

      if (amount > state.items[id - 1].amount) {
        const change = amount - state.items[id - 1].amount;
        state.items[id - 1].amount = amount;
        state.budget -= change * parseInt(state.items[id - 1].price);
      } else if (amount === 0) {
        const change = state.items[id - 1].amount;
        state.items[id - 1].amount = amount;
        state.budget += change * parseInt(state.items[id - 1].price);
      } else if (amount < state.items[id - 1].amount) {
        const change = state.items[id - 1].amount - amount;
        state.items[id - 1].amount = amount;
        state.budget += change * parseInt(state.items[id - 1].price);
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      console.log(state.loading);
    },
  },
});

export const { changeAmount, setLoading } = SpendMoneySlice.actions;
export default SpendMoneySlice.reducer;
