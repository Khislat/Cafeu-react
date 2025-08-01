import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Settings } from './Settings';
import { useNavigate } from 'react-router-dom';
import { useGlobals } from '../hooks/useGlobals';
import { serverApi } from '../../../libs/config';
import { MemberType } from '../../../libs/enums/member.enum';

const UserPageForm = () => {
	const navigate = useNavigate();
	const { authMember } = useGlobals();

	if (!authMember) navigate('/');
	return (
		<div className={'user-page'}>
			<Container>
				<Stack className={'my-page-frame'}>
					<Stack className={'my-page-left'}>
						<Box display={'flex'} flexDirection={'column'}>
							<Box className={'menu-content'}>
								<Settings />
							</Box>
						</Box>
					</Stack>

					<Stack className={'my-page-right'}>
						<Box className={'order-info-box'}>
							<Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
								<div className={'order-user-img'}>
									<img
										src={
											authMember?.memberImage ? `${serverApi}/${authMember.memberImage}` : '/img/icon/user-icon2.svg'
										}
										className={'order-user-avatar'}
									/>
									<div className={'order-user-icon-box'}>
										<img
											src={
												authMember?.memberType === MemberType.RESTAURANT
													? '/img/icon/restaurant.svg'
													: '/img/icon/user-badge.svg'
											}
										/>
									</div>
								</div>
								<span className={'order-user-name'}>{authMember?.memberNick}</span>
								<span className={'order-user-prof'}>{authMember?.memberType}</span>
								<span className={'order-user-prof'}>
									{authMember?.memberAddress ? authMember.memberAddress : 'no address'}
								</span>
							</Box>
							<Box className={'user-media-box'}>
								<FacebookIcon />
								<InstagramIcon />
								<TelegramIcon />
								<YouTubeIcon />
							</Box>
							<p className={'user-desc'}> {authMember?.memberDescr} </p>
						</Box>
					</Stack>
				</Stack>
			</Container>
		</div>
	);
};

export default UserPageForm;
