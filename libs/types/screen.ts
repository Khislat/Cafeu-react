/** REACT APP STATE **/

import { Member } from './member';
import { Product } from './product';

export interface AppRootState {
	homePage: HomePageState;
	menuPage: MenuPageState;
}

export interface HomePageState {
	specialDishes: Product[];
	topUsers: Member[];
	chosenProduct: Product | null;
}

export interface MenuPageState {
	specialMenu: Product[];
}
