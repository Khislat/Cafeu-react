import Header from "./Header";
import HomeMain1 from "./HomeMain1";
import SearchModal from "./SearchModal";
import VideoModal from "./VideoModal";

const HomePage1 = () => {
	return (
		<div className="wrapper">
			<Header style={"header-1"} />
			<HomeMain1 />
			<VideoModal />
			<SearchModal style="default" />
		</div>
	);
};
export default HomePage1;
