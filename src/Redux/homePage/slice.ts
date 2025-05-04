import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../libs/types/screen";

const initialState: HomePageState = {
	specialDishes: [],
	topUsers: [],
};

const homePageSlice = createSlice({
	name: "homePage",
	initialState,
	reducers: {
		setSpecicalDishes: (state, action) => {
			state.specialDishes = action.payload;
		},
		setTopUsers: (state, action) => {
			state.topUsers = action.payload;
		},
	},
});

export const { setSpecicalDishes, setTopUsers } = homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
