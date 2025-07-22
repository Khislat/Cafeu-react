import React from 'react';
import BreadcrumbSection2 from "../components/breadcrumb/BreadcrumbSection2";
import Layout2 from "../components/layout/Layout2";
import VideoModal from "../components/HomePage/VideoModal";
import SubscribeSection2 from "../components/newsletter/SubscribeSection2";
import ReservationSection2 from "../components/reservation/ReservationSection2";
import VideoSection2 from "../components/video/VideoSection2";

const ReservationPage = () => {
	return (
		<div className="home-6 reservation-page-main">
			<Layout2>
				<BreadcrumbSection2 currentPage="Reservations" />
				<ReservationSection2 />
				<SubscribeSection2 />
				<VideoSection2 />
			</Layout2>
			<VideoModal />
		</div>
	);
};
export default ReservationPage;
