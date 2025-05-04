import { createSelector } from "reselect";
import { AppRootState } from "../../../libs/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;
export const retrieveSpecialDishes = createSelector(
	selectHomePage,
	(HomePage) => HomePage.specialDishes
);
export const retrieveTopUsers = createSelector(
	selectHomePage,
	(HomePage) => HomePage.topUsers
);
