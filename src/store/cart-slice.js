import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cartSlice",
	initialState: {
		items: [],
		totalQuantity: 0,
	},
	reducers: {
		addItem(state, action) {
			const item = action.payload.item;
			state.totalQuantity += item.quantity;

			for (let i = 0; i < state.items.length; i++) {
				if (item.id === state.items[i].id) {
					state.items[i].quantity += item.quantity;
					state.items[i].total += item.quantity * item.price;
					return;
				}
			}

			state.items.push({...item, total: item.quantity * item.price});
		},
		subtractItem(state, action) {
			const item = action.payload.item;
			state.totalQuantity -= item.quantity;

			for (let i = 0; i < state.items.length; i++) {
				if (item.id === state.items[i].id) {
					state.items[i].quantity -= item.quantity;
					state.items[i].total -= item.quantity * state.items[i].price;

					if (state.items[i].quantity <= 0) {
						state.items.splice(i, 1);
					}

					return;
				}
			}
		},
	},
});

export const cartActions = cartSlice.actions;

export default cartSlice;
