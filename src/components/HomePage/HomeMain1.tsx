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


const HomeMain1 = () => {
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

export default HomeMain1;
