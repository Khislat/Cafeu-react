import BannerSection from '../banner/BannerSection';
import SocialSection from '../social/SocialSection';
import FeatureSection from '../feature/FeatureSection';
import SubscribeSection from '../newsletter/SubscribeSection';
import AboutSection from '../about/AboutSection';
import MenuSection from '../menu/MenuSection';
import AppSection from '../mobile-app/AppSection';
import ScheduleSection from '../schedule/ScheduleSection';
import TeamSection from '../team/TeamSection';
import CustomerSection from '../customer/CustomerSection';
import BlogSection from '../blog/BlogSection';
import FooterSection from '../footer/FooterSection';
import SidebarSection from '../sidebar/SidebarSection';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { Product } from '../../../libs/types/product';
import { setSpecialDishes, setTopUsers } from '../../Redux/homePage/slice';
import ProductService from '../../services/ProductService';
import MemberService from '../../services/MemberService';
import { Member } from '../../../libs/types/member';

/** REDUX SLICE & SELECTOR **/

const actionDispatch = (distpatch: Dispatch) => ({
	setSpecialDishes: (data: Product[]) => distpatch(setSpecialDishes(data)),
	setTopUsers: (data: Member[]) => distpatch(setTopUsers(data)),
});

const HomeMain = () => {
	const { setSpecialDishes, setTopUsers } = actionDispatch(useDispatch());

	useEffect(() => {
		// Backend server data fetch = Data
		const product = new ProductService();
		product
			.getProducts({ page: 1, limit: 6, order: 'productViews' })
			.then((data) => {
				setSpecialDishes(data);
			})
			.catch((err) => console.log(err));

		const member = new MemberService();
		member
			.getTopUsers()
			.then((data) => {
				setTopUsers(data);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="body-wrapper">
			<BannerSection theme="banner-1" startIndex={0} endIndex={3} />
			<SocialSection style="" />
			<SidebarSection logo="/img/logo/logo.png" />
			<FeatureSection />
			<SubscribeSection wrapper="subscribe-wrapper-1" style="" />
			<AboutSection />
			<MenuSection />
			<AppSection />
			<ScheduleSection />
			<TeamSection />
			<CustomerSection />
			<BlogSection style="" />

			<FooterSection style="footer-1" />
		</div>
	);
};

export default HomeMain;
