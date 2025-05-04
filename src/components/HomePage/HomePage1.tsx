import Header from "./Header";
import HomeMain from "./HomeMain1";

import SearchModal from "./SearchModal";
import VideoModal from "./VideoModal";

const HomePage = () => {
	return (
		<div className="wrapper">
			<Header style={"header-1"} />
			<HomeMain />
			<VideoModal />
			<SearchModal style="default" />
		</div>
	);
};
export default HomePage;
