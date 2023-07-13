import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const item = action.payload.item;
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === item.id) {
          state.items[i].quantity += item.quantity;
          state.items[i].total += item.quantity * item.price;
          return;
        }
      }
      state.items.push({ ...item, total: item.quantity * item.price });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
