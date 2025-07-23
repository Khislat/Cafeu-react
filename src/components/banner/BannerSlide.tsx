import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const BannerSlide = () => {
	return (
		<div className="position-relative">
			<div className="text-end">
				<img className="ad-banner-img d-block w-100" src="img/aida-images/banner.png" alt="..." />
			</div>
			<div className="ad-banner-content">
				<motion.div
					className="ad-banner-text-container"
					initial={{
						x: -60,
						opacity: 0,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1.2,
						ease: 'easeIn',
					}}
					viewport={{
						once: true,
					}}
				>
					<div className="ad-banner-text-effect">
						<p>Uttara Coffee House</p>
						<h1>different spice for a different taste</h1>
						<Link to="/about-2">
							<button>Read More</button>
						</Link>
					</div>
				</motion.div>
				<div className="ad-banner-person-container">
					<motion.div
						className="ad-banner-person"
						initial={{
							x: -80,
							opacity: 0,
						}}
						whileInView={{
							x: 0,
							opacity: 1,
						}}
						transition={{
							duration: 1.5,
							ease: 'easeIn',
						}}
						viewport={{
							once: true,
						}}
					>
						<img src="img/aida-images/banner-person1.png" alt="" />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default BannerSlide;
