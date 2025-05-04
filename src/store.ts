import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./Redux/homePage/slice";
import reduxLogger from "redux-logger";
import { Middleware } from "redux";

const logger = reduxLogger as Middleware<{}, any, any>; // ✅ casting ishlatildi

export const store = configureStore({
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // reduxLogger o‘rniga logger
	reducer: {
		homePage: HomePageReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
