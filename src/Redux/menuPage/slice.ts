import { createSlice } from '@reduxjs/toolkit';
import { MenuPageState } from '../../../libs/types/screen';

const initialState: MenuPageState = {
	specialMenu: [],
};

const menuPageSlice = createSlice({
	name: 'menuPage',
	initialState,
	reducers: {
		setSpecialMenu: (state, action) => {
			state.specialMenu = action.payload;
		},
	},
});

export const { setSpecialMenu } = menuPageSlice.actions;

const MenuPageReducer = menuPageSlice.reducer;
export default MenuPageReducer;
