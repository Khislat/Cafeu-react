import React from "react";
import { Link } from "react-router-dom";
interface BreadcrumbSectionProps {
	title: string;
	header: string;
}
const BreadcrumbSectionn: React.FC<BreadcrumbSectionProps> = ({
	title,
	header,
}) => {
	return (
		<div className="page-banner breadcrumb-section">
			<div className="container">
				<div className="row">
					<div className="page-ban-content">
						<h1
							className="page-head"
							data-aos="fade-up"
							data-aos-duration="1000"
							style={{ fontSize: "50px" }}>
							{header}
						</h1>
						<div
							className="breadcrumb-list"
							data-aos="fade-up"
							data-aos-duration="1500">
							<Link
								to="/signup"
								className="page-route-link"
								style={{ fontSize: "30px" }}>
								Signup
							</Link>
							<span className="devider" style={{ fontSize: "30px" }}>
								/
							</span>
							<Link
								to="/login"
								className="page-route-link"
								style={{ fontSize: "30px", color: "#cc3333" }} >
								Login
							</Link>

							<span>{title}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BreadcrumbSectionn;
