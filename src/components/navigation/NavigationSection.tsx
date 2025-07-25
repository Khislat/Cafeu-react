import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Basket from '../HomePage/Basket';
import { useGlobals } from '../hooks/useGlobals';
import { ListItemIcon, Menu, MenuItem } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { serverApi } from '../../../libs/config';
import { CartItem } from '../../../libs/types/search';
import { useState, useEffect } from 'react';
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface NavigationSectionProps {
	cartItems: CartItem[];
	onAdd: (item: CartItem) => void;
	onRemove: (item: CartItem) => void;
	onDelete: (item: CartItem) => void;
	onDeleteAll: () => void;
}

const NavigationSection = (props: NavigationSectionProps) => {
	const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = props;
	const { authMember, setAuthMember } = useGlobals();
	const navigate = useNavigate();

	// 로그아웃 관련 상태를 컴포넌트 내부에서 관리
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleLogoutClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseLogout = () => {
		setAnchorEl(null);
	};

	const handleLogoutRequest = () => {
		// 로컬 스토리지에서 토큰 제거
		localStorage.removeItem('member_data');
		localStorage.removeItem('member_token');

		// 전역 상태 업데이트
		setAuthMember(null);

		// 메뉴 닫기
		handleCloseLogout();

		// 홈 페이지로 리디렉션
		navigate('/');
	};

	// 페이지가 로드될 때마다 로그인 상태 확인
	useEffect(() => {
		const memberData = localStorage.getItem('member_data');
		if (!authMember && memberData) {
			try {
				const memberObj = JSON.parse(memberData);
				setAuthMember(memberObj);
			} catch (err) {
				console.log('Failed to parse member data');
			}
		}
	}, [authMember, setAuthMember]);

	return (
		<nav className="cf-header-menu" id="header-menu">
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/menu">Menu</NavLink>
				</li>
				{authMember ? (
					<li>
						<NavLink to="/shop">Shop</NavLink>
					</li>
				) : null}

				{authMember ? (
					<li>
						<NavLink to="/cart">
							{/* <ShoppingCartIcon /> */}
							Orders
						</NavLink>
					</li>
				) : null}

				<li>
					<NavLink to="/blog-grid">Blog</NavLink>
				</li>

				<li>
					<NavLink to="/faq">FAQ</NavLink>
				</li>
				{authMember ? (
					<li>
						<NavLink to="/my-page">My Page</NavLink>
					</li>
				) : null}

				<li>
					<Basket
						cartItems={cartItems}
						onAdd={onAdd}
						onRemove={onRemove}
						onDelete={onDelete}
						onDeleteAll={onDeleteAll}
					/>
				</li>

				{!authMember ? (
					<li>
						<NavLink to="/login">Register</NavLink>
					</li>
				) : (
					<img
						className="user-avatar"
						src={authMember?.memberImage ? `${serverApi}/${authMember?.memberImage}` : '/img/icon/user-icon2.svg'}
						aria-haspopup="true"
						onClick={handleLogoutClick}
						style={{ cursor: 'pointer' }}
						alt="User avatar"
					/>
				)}
			</ul>

			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={Boolean(anchorEl)}
				onClose={handleCloseLogout}
				onClick={handleCloseLogout}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						backgroundColor: '#f5f5f5',
						boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem onClick={handleLogoutRequest}>
					<ListItemIcon>
						<Logout fontSize="small" style={{ color: 'disabled' }} />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</nav>
	);
};

export default NavigationSection;
