import { createSlice } from '@reduxjs/toolkit';
import { HomePageState } from '../../../libs/types/screen';

const initialState: HomePageState = {
	specialDishes: [],
	chosenProduct: null,
	topUsers: [],
};

const homePageSlice = createSlice({
	name: 'homePage',
	initialState,
	reducers: {
		setSpecialDishes: (state, action) => {
			state.specialDishes = action.payload;
		},
		setChosenProduct: (state, action) => {
			state.chosenProduct = action.payload;
		},
		setTopUsers: (state, action) => {
			state.topUsers = action.payload;
		},
	},
});

export const { setSpecialDishes, setChosenProduct, setTopUsers } = homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
console.log('homePage', HomePageReducer);
export default HomePageReducer;
