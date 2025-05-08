import { CartItem } from '../../../libs/types/search';
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
	cartItems: CartItem[];
	onAdd: (item: CartItem) => void;
	onRemove: (item: CartItem) => void;
	onDelete: (item: CartItem) => void;
	onDeleteAll: () => void;
}

const HomePage = (props: HomeNavbarProps) => {
	const { setAuthMember } = useGlobals();
	const {
		cartItems,
		onAdd,
		onRemove,
		onDelete,
		onDeleteAll,
		handleLogoutClick,
		anchorEl,
		handleCloseLogout,
		handleLogoutRequest,
		
	} = props;
	return (
		<div className="wrapper">
			<Header
				style={'header-1'}
				anchorEl={anchorEl}
				handleLogoutClick={handleLogoutClick}
				handleCloseLogout={handleCloseLogout}
				handleLogoutRequest={handleLogoutRequest}
				cartItems={cartItems}
				onAdd={onAdd}
				onRemove={onRemove}
				onDelete={onDelete}
				onDeleteAll={onDeleteAll}
			/>
			<HomeMain />
			<VideoModal />
			<SearchModal style="default" />
		</div>
	);
};
export default HomePage;
