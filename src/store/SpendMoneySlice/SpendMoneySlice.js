import { createSlice } from "@reduxjs/toolkit";

export const SpendMoneySlice = createSlice({
  name: "items",
  initialState: {
    budget: "130000000000",
    items: [
      {
        title: "Big Mac",
        price: 4,
        img: "https://neal.fun/spend/images/big-mac.jpg",
      },
      {
        title: "Flip Flops",
        price: 6,
        img: "https://neal.fun/spend/images/flip-flops.jpg",
      },
      {
        title: "Coca Cola Pack",
        price: 10,
        img: "https://neal.fun/spend/images/coca-cola-pack.jpg",
      },
      {
        title: "Movie Ticket",
        price: 12,
        img: "https://neal.fun/spend/images/movie-ticket.jpg",
      },
      {
        title: "Book",
        price: 15,
        img: "https://neal.fun/spend/images/book.jpg",
      },
      {
        title: "Lobster Dinner",
        price: 45,
        img: "https://neal.fun/spend/images/lobster-dinner.jpg",
      },
      {
        title: "Video Game",
        price: 60,
        img: "https://neal.fun/spend/images/video-game.jpg",
      },
      {
        title: "Amazon Echo",
        price: 99,
        img: "https://neal.fun/spend/images/amazon-echo.jpg",
      },
      {
        title: "Year of Netflix",
        price: 100,
        img: "https://neal.fun/spend/images/year-of-netflix.jpg",
      },
      {
        title: "Air Jordans",
        price: 125,
        img: "https://neal.fun/spend/images/air-jordans.jpg",
      },
      {
        title: "Airpods",
        price: 199,
        img: "https://neal.fun/spend/images/airpods.jpg",
      },
      {
        title: "Gaming Console",
        price: 299,
        img: "https://neal.fun/spend/images/gaming-console.jpg",
      },
      {
        title: "Drone",
        price: 350,
        img: "https://neal.fun/spend/images/drone.jpg",
      },
      {
        title: "Smartphone",
        price: 699,
        img: "https://neal.fun/spend/images/smartphone.jpg",
      },
      {
        title: "Bike",
        price: 800,
        img: "https://neal.fun/spend/images/bike.jpg",
      },
      {
        title: "Luxury Wine",
        price: 7000,
        img: "https://neal.fun/spend/images/luxury-wine.jpg",
      },
      {
        title: "Diamond Ring",
        price: 10000,
        img: "https://neal.fun/spend/images/diamond-ring.jpg",
      },
      {
        title: "Jet Ski",
        price: 12000,
        img: "https://neal.fun/spend/images/jet-ski.jpg",
      },
      {
        title: "Rolex",
        price: 15000,
        img: "https://neal.fun/spend/images/rolex.jpg",
      },
      {
        title: "Tesla",
        price: 75000,
        img: "https://neal.fun/spend/images/tesla.jpg",
      },
      {
        title: "Ferrari",
        price: 250000,
        img: "https://neal.fun/spend/images/ferrari.jpg",
      },
      {
        title: "Single Family Home",
        price: 300000,
        img: "https://neal.fun/spend/images/single-family-home.jpg",
      },
      {
        title: "Gold Bar",
        price: 700000,
        img: "https://neal.fun/spend/images/gold-bar.jpg",
      },
      {
        title: "McDonalds Franchise",
        price: 1500000,
        img: "https://neal.fun/spend/images/mcdonalds-franchise.jpg",
      },
      {
        title: "Yacht",
        price: 7500000,
        img: "https://neal.fun/spend/images/yacht.jpg",
      },
      {
        title: "M1 Abrams",
        price: 8000000,
        img: "https://neal.fun/spend/images/m1-abrams.jpg",
      },
      {
        title: "Formula 1 Car",
        price: 15000000,
        img: "https://neal.fun/spend/images/formula-1-car.jpg",
      },
      {
        title: "Apache Helicopter",
        price: 31000000,
        img: "https://neal.fun/spend/images/apache-helicopter.jpg",
      },
      {
        title: "Make a Movie",
        price: 100000000,
        img: "https://neal.fun/spend/images/make-a-movie.jpg",
      },
      {
        title: "Boeing 747",
        price: 148000000,
        img: "https://neal.fun/spend/images/boeing-747.jpg",
      },
      {
        title: "Mona Lisa",
        price: 780000000,
        img: "https://neal.fun/spend/images/mona-lisa.jpg",
      },
      {
        title: "Cruise Ship",
        price: 930000000,
        img: "https://neal.fun/spend/images/cruise-ship.jpg",
      },
      {
        title: "NBA Team",
        price: "2120000000",
        img: "https://neal.fun/spend/images/nba-team.jpg",
      },
    ],
  },
  reducers: {
    buy: {
      reducer: (state, action) => {
        state.budget = parseInt(state.budget) - action.payload;
      },
    },
    sell: {
      reducer: (state, action) => {
        state.budget = parseInt(state.budget) + action.payload;
      },
    },
  },
});

export const { buy, sell } = SpendMoneySlice.actions;
export default SpendMoneySlice.reducer;
