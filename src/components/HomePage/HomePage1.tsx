import { useGlobals } from '../hooks/useGlobals';
import Header from './Header';
import HomeMain from './HomeMain1';

import SearchModal from './SearchModal';
import VideoModal from './VideoModal';

interface HomeNavbarProps {
	handleLogoutClick: (e: React.MouseEvent<HTMLElement>) => void;
	anchorEl: HTMLElement | null;
	handleCloseLogout: () => void;
	handleLogoutRequest: () => void;
}

const HomePage = (props: HomeNavbarProps) => {
	const { setAuthMember } = useGlobals();
	const { handleLogoutClick, anchorEl, handleCloseLogout, handleLogoutRequest } = props;
	return (
		<div className="wrapper">
			<Header
				style={'header-1'}
				anchorEl={anchorEl}
				handleLogoutClick={handleLogoutClick}
				handleCloseLogout={handleCloseLogout}
				handleLogoutRequest={handleLogoutRequest}
			/>
			<HomeMain />
			<VideoModal />
			<SearchModal style="default" />
		</div>
	);
};
export default HomePage;
