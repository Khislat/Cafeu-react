import { createSelector } from 'reselect';
import { AppRootState } from '../../../libs/types/screen';

const selectMenuPage = (state: AppRootState) => state.menuPage;
export const retrieveSpecialMenu = createSelector(selectMenuPage, (menuPage) =>menuPage.specialMenu);
