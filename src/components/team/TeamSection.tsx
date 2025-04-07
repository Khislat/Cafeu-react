import { teamList } from "../../data/Data";

const TeamSection = () => {
	return (
		<section>
			<div className="team cmb-7">
				<div className="container">
					<div
						className="section-head text-center "
						data-aos="fade-up"
						data-aos-duration="1000">
						<span className="sm-title ">Top Users</span>
						<h2 className="sec-title">Meet Our Top Users</h2>
					</div>
					<div className="row mt-40">
						{teamList.slice(0, 3).map((item) => (
							<div
								className="col-md-4 col-sm-6 mb-4"
								data-aos="fade-up"
								data-aos-duration="1000"
								key={item.id}>
								<div className="team-card">
									<div className="member-img">
										<img src={item.imgSrc} alt="Image not found" />
									</div>
									<div className="member-details">
										<div className="member-name">{item.name}</div>
										<p className="member-title">{item.position}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
