import { createSlice } from "@reduxjs/toolkit";
const contactSlice = createSlice({
  name: "contactElement",
  initialState: [
    {
      name: "alex",
      lastName: "Muller",
      age: 22,
      email: "alMuller@gmail.com",
    },

    {
      name: "philipe",
      lastName: "Lewandowski",
      age: 34,
      email: "lewa@gmail.com",
    },
  ],
  reducers: {
    setContact: (state, action) => {
      return action.payload;
    },
  },
});

export const { setContact } = contactSlice.actions;
export default contactSlice.reducer;
