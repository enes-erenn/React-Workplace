import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const NotesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        note: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis harum vero ducimus quod maxime dolorem laboriosam quam amet voluptatibus modi, temporibus quos ad rem assumenda illo nemo repellendus eum exercitationem!
        Veniam odio impedit rem dolorem repellendus porro nisi accusamus velit, praesentium excepturi quisquam assumenda optio ullam labore repellat! Repellat, corporis! Id excepturi quae voluptatibus, minus quas molestias nam officia minima!
        Nostrum non cumque assumenda, iure nihil cupiditate maxime nobis. Nostrum natus ducimus blanditiis maiores esse, exercitationem rerum. Neque veritatis sunt, hic minus fugit repellat quasi itaque sapiente similique maiores doloremque.`,
        color: "#9e0059",
      },
      {
        note: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis harum vero ducimus quod maxime dolorem laboriosam quam amet voluptatibus modi, temporibus quos ad rem assumenda illo nemo repellendus eum exercitationem!
        Veniam odio impedit rem dolorem repellendus porro nisi accusamus velit, praesentium excepturi quisquam assumenda optio ullam labore repellat! Repellat, corporis! Id excepturi quae voluptatibus, minus quas molestias nam officia minima!
        Nostrum non cumque assumenda, iure nihil cupiditate maxime nobis. Nostrum natus ducimus blanditiis maiores esse, exercitationem rerum. Neque veritatis sunt, hic minus fugit repellat quasi itaque sapiente similique maiores doloremque.`,
        color: "#ff5d8f",
      },
      {
        note: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis harum vero ducimus quod maxime dolorem laboriosam quam amet voluptatibus modi, temporibus quos ad rem assumenda illo nemo repellendus eum exercitationem!
        Veniam odio impedit rem dolorem repellendus porro nisi accusamus velit, praesentium excepturi quisquam assumenda optio ullam labore repellat! Repellat, corporis! Id excepturi quae voluptatibus, minus quas molestias nam officia minima!
        Nostrum non cumque assumenda, iure nihil cupiditate maxime nobis. Nostrum natus ducimus blanditiis maiores esse, exercitationem rerum. Neque veritatis sunt, hic minus fugit repellat quasi itaque sapiente similique maiores doloremque.`,
        color: "#ffbd00",
      },
      {
        note: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis harum vero ducimus quod maxime dolorem laboriosam quam amet voluptatibus modi, temporibus quos ad rem assumenda illo nemo repellendus eum exercitationem!
        Veniam odio impedit rem dolorem repellendus porro nisi accusamus velit, praesentium excepturi quisquam assumenda optio ullam labore repellat! Repellat, corporis! Id excepturi quae voluptatibus, minus quas molestias nam officia minima!
        Nostrum non cumque assumenda, iure nihil cupiditate maxime nobis. Nostrum natus ducimus blanditiis maiores esse, exercitationem rerum. Neque veritatis sunt, hic minus fugit repellat quasi itaque sapiente similique maiores doloremque.`,
        color: "#83c5be",
      },
      {
        note: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis harum vero ducimus quod maxime dolorem laboriosam quam amet voluptatibus modi, temporibus quos ad rem assumenda illo nemo repellendus eum exercitationem!
        Veniam odio impedit rem dolorem repellendus porro nisi accusamus velit, praesentium excepturi quisquam assumenda optio ullam labore repellat! Repellat, corporis! Id excepturi quae voluptatibus, minus quas molestias nam officia minima!
        Nostrum non cumque assumenda, iure nihil cupiditate maxime nobis. Nostrum natus ducimus blanditiis maiores esse, exercitationem rerum. Neque veritatis sunt, hic minus fugit repellat quasi itaque sapiente similique maiores doloremque.`,
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
