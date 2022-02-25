import { createSlice } from "@reduxjs/toolkit";

export const MemoryGameSlice = createSlice({
  name: "cards",
  initialState: {
    items: [
      {
        id: 1,
        title: "bower",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 2,
        title: "angular",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 3,
        title: "ionic",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 4,
        title: "browserify",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 5,
        title: "meteor",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 6,
        title: "grunt",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 7,
        title: "phantomjs",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 8,
        title: "yarn",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 9,
        title: "react",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 10,
        title: "babel",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 11,
        title: "vue",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 12,
        title: "nodejs",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 13,
        title: "gulp",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 14,
        title: "ember",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 15,
        title: "yeoman",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 16,
        title: "bower",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 17,
        title: "angular",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 18,
        title: "ionic",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 19,
        title: "browserify",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 20,
        title: "meteor",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 21,
        title: "grunt",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 22,
        title: "phantomjs",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 23,
        title: "yarn",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 24,
        title: "react",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 25,
        title: "babel",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 26,
        title: "vue",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 27,
        title: "nodejs",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 28,
        title: "gulp",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 29,
        title: "ember",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
        isActive: false,
        isLocked: false,
      },
      {
        id: 30,
        title: "yeoman",
        img: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",
        isActive: false,
        isLocked: false,
      },
    ],
    slots: 2,
    firstSlot: null,
    secondSlot: null,
  },

  reducers: {
    setState: (state, action) => {
      state.items[action.payload.id - 1].isLocked === true
        ? (state.items[action.payload.id - 1].isActive = true)
        : (state.items[action.payload.id - 1].isActive =
            !state.items[action.payload.id - 1].isActive);
      console.log(state.items[action.payload.id - 1].isLocked);
      if (state.slots === 2) {
        state.firstSlot = action.payload.id - 1;
        state.slots = state.slots - 1;
      } else if (state.slots === 1) {
        state.secondSlot = action.payload.id - 1;
        state.slots = state.slots - 1;
        if (
          state.items[state.firstSlot].title ===
          state.items[state.secondSlot].title
        ) {
          state.items[state.firstSlot].isLocked = true;
          state.items[state.secondSlot].isLocked = true;
        }
      } else {
        state.items[state.firstSlot].isLocked !== true
          ? (state.items[state.firstSlot].isActive =
              !state.items[state.firstSlot].isActive)
          : (state.items[state.firstSlot].isActive = true);
        state.items[state.secondSlot].isLocked !== true
          ? (state.items[state.secondSlot].isActive =
              !state.items[state.secondSlot].isActive)
          : (state.items[state.secondSlot].isActive = true);

        state.slots = 2;
        state.firstSlot = action.payload.id - 1;
        state.slots = state.slots - 1;
      }
    },
  },
});

export const { setState } = MemoryGameSlice.actions;
export default MemoryGameSlice.reducer;
