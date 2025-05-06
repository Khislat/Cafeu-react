/** REACT APP STATE **/

import { Member } from './member';
import { Product } from './product';

export interface AppRootState {
	homePage: HomePageState;
	menuPage: MenuPageState;
	shopPage: ShopPageState;
}

/** HomePage **/
export interface HomePageState {
	specialDishes: Product[];
	topUsers: Member[];
	chosenProduct: Product | null;
}

/** MenuPage **/
export interface MenuPageState {
	specialMenu: Product[];
}

/** ShopPage **/
export interface ShopPageState {
	allMenu: Product[];
}
