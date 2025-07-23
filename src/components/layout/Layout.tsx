'use client';
import React from 'react';
import Header from '../HomePage/Header';
import SidebarSection from '../sidebar/SidebarSection';
import FooterSection from '../footer/FooterSection';
import VideoModal from '../HomePage/VideoModal';
import { ToastContainer } from 'react-toastify';
import SearchModal from '../HomePage/SearchModal';
import { CartItem } from '../../../libs/types/search';

interface LayoutProps {
	children: any;
	cartItems?: CartItem[];
	onAdd?: (item: CartItem) => void;
	onRemove?: (item: CartItem) => void;
	onDelete?: (item: CartItem) => void;
	onDeleteAll?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, cartItems, onAdd, onRemove, onDelete, onDeleteAll }) => {
	return (
		<div className="wrapper">
			<Header
				style="header-default"
				cartItems={cartItems || []}
				onAdd={onAdd || (() => {})}
				onRemove={onRemove || (() => {})}
				onDelete={onDelete || (() => {})}
				onDeleteAll={onDeleteAll || (() => {})}
			/>
			<SidebarSection logo="/img/logo/logo.png" />
			<div className="body-wrapper">
				{children}
				<FooterSection style="footer-1" />
			</div>
			<VideoModal />
			<SearchModal style="default" />
			<ToastContainer />
		</div>
	);
};

export default Layout;
