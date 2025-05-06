import { createSlice } from '@reduxjs/toolkit';
import { ShopPageState } from '../../../libs/types/screen';

const initialState: ShopPageState = {
	allMenu: [],
};

const shopPageSlice = createSlice({
	name: 'shopPage',
	initialState,
	reducers: {
		setAllMenu: (state, action) => {
			state.allMenu = action.payload;
		},
	},
});

export const { setAllMenu } = shopPageSlice.actions;

const ShopPageReducer = shopPageSlice.reducer;
export default ShopPageReducer;
