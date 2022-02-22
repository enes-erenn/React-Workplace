import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const NotesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        note: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis harum vero ducimus quod maxime dolorem laboriosam quam amet voluptatibus modi, temporibus quos ad rem assumenda illo nemo repellendus eum exercitationem!`,
        color: "#9e0059",
      },
      {
        note: `
        Veniam odio impedit rem dolorem repellendus porro nisi accusamus velit, praesentium excepturi quisquam assumenda optio ullam labore repellat! Repellat, corporis! Id excepturi quae voluptatibus, minus quas molestias nam officia minima!`,
        color: "#ff5d8f",
      },
      {
        note: `Nostrum non cumque assumenda, iure nihil cupiditate maxime nobis. Nostrum natus ducimus blanditiis maiores esse, exercitationem rerum. Neque veritatis sunt, hic minus fugit repellat quasi itaque sapiente similique maiores doloremque.`,
        color: "#ffbd00",
      },
      {
        note: ` Hic commodi voluptatibus necessitatibus ipsum, aliquam deserunt, earum quod voluptas nulla ut obcaecati magnam voluptates maiores, possimus unde inventore quibusdam. Molestiae adipisci voluptate officia eos reiciendis accusantium recusandae, itaque ut.`,
        color: "#83c5be",
      },
      {
        note: `  Accusamus eligendi consectetur, voluptas fugiat iste facere mollitia amet. Et sunt dolores ratione nam qui est vitae necessitatibus ullam deleniti in? Sapiente quisquam illo vel quod inventore nihil reiciendis culpa?`,
        color: "#a3b18a",
      },
    ],
  },

  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ note, color }) => {
        return {
          payload: {
            id: nanoid(),
            note,
            color,
          },
        };
      },
    },
  },
});

export const { addNote } = NotesSlice.actions;
export default NotesSlice.reducer;
