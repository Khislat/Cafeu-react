import BannerSection from "../banner/BannerSection";
import SocialSection from "../social/SocialSection";
import FeatureSection from "../feature/FeatureSection";
import SubscribeSection from "../newsletter/SubscribeSection";
import AboutSection from "../about/AboutSection";
import MenuSection from "../menu/MenuSection";
import AppSection from "../mobile-app/AppSection";
import ScheduleSection from "../schedule/ScheduleSection";
import TeamSection from "../team/TeamSection";
import CustomerSection from "../customer/CustomerSection";
import BlogSection from "../blog/BlogSection";
import FooterSection from "../footer/FooterSection";
import SidebarSection from "../sidebar/SidebarSection";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setSpecialDishes } from "../../../src/Redux/homePage/slice.ts";
import { retrieveSpecialDishes } from "../../Redux/homePage/selector";
import { Product } from "../../../libs/types/product.ts";

/** REDUX SLICE & SELECTOR **/

const actionDispatch = (distpatch: Dispatch) => ({
	setSpecialDishes: (data: Product[]) => distpatch(setSpecialDishes(data)),
});

const specialDishesReriever = createSelector(
	retrieveSpecialDishes,
	(specialDishes) => ({ specialDishes })
);

const HomeMain = () => {
	const { setSpecialDishes } = actionDispatch(useDispatch());
	const { specialDishes } = useSelector(specialDishesReriever);

	console.log("root", import.meta.env.VITE_API_URL);

	useEffect(() => {}, []);
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
