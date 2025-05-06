import { createSelector } from 'reselect';
import { AppRootState } from '../../../libs/types/screen';

const selectShopPage = (state: AppRootState) => state.shopPage;
export const retrieveAllMenu = createSelector(selectShopPage, (shopPage) => shopPage.allMenu);
