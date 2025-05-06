import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomePageReducer from './Redux/homePage/slice';
import reduxLogger from 'redux-logger';
import type { Middleware } from 'redux';
import MenuPageReducer from './Redux/menuPage/slice';
import ShopPageReducer from './Redux/shopPage/slice';

const logger = reduxLogger as Middleware;

export const store = configureStore({
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	reducer: {
		homePage: HomePageReducer,
		menuPage: MenuPageReducer,
		shopPage: ShopPageReducer
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
