import { createSelector } from '@reduxjs/toolkit';
import { retrieveTopUsers } from '../../Redux/homePage/selector';
import { useSelector } from 'react-redux';
import { Member } from '../../../libs/types/member';
import { serverApi } from '../../../libs/config';

// Redux selector
const topUsersRetriever = createSelector(retrieveTopUsers, (topUsers) => ({
	topUsers,
}));

const TeamSection = () => {
	const { topUsers } = useSelector(topUsersRetriever);

	return (
		<section>
			<div className="team cmb-7">
				<div className="container">
					<div className="section-head text-center" data-aos="fade-up" data-aos-duration="1000">
						<span className="sm-title">Top Users</span>
						<h2 className="sec-title">Meet Our Top Users</h2>
					</div>
					<div className="row mt-40">
						{topUsers.slice(0, 3).map((member: Member) => {
							const imagePath = `${serverApi}/${member.memberImage}`; 
							return (
								<div className="col-md-4 col-sm-6 mb-4" data-aos="fade-up" data-aos-duration="1000" key={member._id}>
									<div className="team-card">
										<div className="member-img">
											<img src={imagePath} alt="Image not found" />
										</div>
										<div className="member-details">
											<div className="member-name">{member.memberNick}</div>
											<p className="member-title">{member.memberDescr}</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
