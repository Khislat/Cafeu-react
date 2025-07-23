import React from 'react';
import { Box, Input } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Button from '@mui/material/Button';
import { useState } from 'react';
import MemberService from '../../services/MemberService';
import { Label } from '@mui/icons-material';
import { useGlobals } from '../hooks/useGlobals';
import { Messages, serverApi } from '../../../libs/config';
import { MemberUpdateInput } from '../../../libs/types/member';
import { T } from '../../../libs/types/common';
import { sweetErrorHandling, sweetTopSmallSuccessAlert } from '../../../libs/sweetAlert';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { time } from 'console';

export function Settings() {
	const navigate = useNavigate();
	const { authMember, setAuthMember } = useGlobals();
	const [memberImage, setMemberImage] = useState<string>(
		authMember?.memberImage ? `${serverApi}/${authMember.memberImage}` : '/img/icon/user-icon2.svg',
	);
	const [memberUpdateInput, setMemberUpdateInput] = useState<MemberUpdateInput>({
		memberNick: authMember?.memberNick,
		memberPhone: authMember?.memberPhone,
		memberAddress: authMember?.memberAddress,
		memberDescr: authMember?.memberDescr,
		memberImage: authMember?.memberImage,
	});

	/** HEANDLEARS **/

	const memberNickHandler = (e: T) => {
		memberUpdateInput.memberNick = e.target.value;
		setMemberUpdateInput({ ...memberUpdateInput });
	};
	const memberPhoneHadler = (e: T) => {
		memberUpdateInput.memberPhone = e.target.value;
		setMemberUpdateInput({ ...memberUpdateInput });
	};
	const memberAddressrHandler = (e: T) => {
		memberUpdateInput.memberAddress = e.target.value;
		setMemberUpdateInput({ ...memberUpdateInput });
	};
	const memberDescriptionHandler = (e: T) => {
		memberUpdateInput.memberDescr = e.target.value;
		setMemberUpdateInput({ ...memberUpdateInput });
	};

	const handleSubmitButton = async () => {
		try {
			if (!authMember) throw new Error(Messages.error2);
			if (
				memberUpdateInput.memberNick === '' ||
				memberUpdateInput.memberPhone === '' ||
				memberUpdateInput.memberAddress === '' ||
				memberUpdateInput.memberDescr === ''
			) {
				throw new Error(Messages.error3);
			}

			const member = new MemberService();
			const result = await member.updateMember(memberUpdateInput);
			setAuthMember(result);

			toast.success('Modify successfuly!', { autoClose: 1150 });
			setTimeout(() => {
				navigate('/');
			}, 1800);
		} catch (err) {
			console.log(err);
			toast.error('Modify unsuccessfuly!');
		}
	};

	const handleImageViewer = (e: T) => {
		const file = e.target.files[0];
		console.log('file:', file);
		const fileType = file.type,
			validateImageTypes = ['image/jpg', 'image/jpeg', 'image/png'];
		if (!validateImageTypes.includes(fileType)) {
			sweetErrorHandling(Messages.error5).then();
		} else {
			if (file) {
				memberUpdateInput.memberImage = file;
				setMemberUpdateInput({ ...memberUpdateInput });
				setMemberImage(URL.createObjectURL(file));
			}
		}
	};

	return (
		<Box className={'settings'}>
			<Box className={'member-media-frame'}>
				<img src={memberImage} className={'mb-image'} />
				<div className={'media-change-box'}>
					<span>Upload image</span>
					<p>JPG, JPEG, PNG formats only!</p>
					<div className={'up-del-box'}>
						<Button component="label" onChange={handleImageViewer}>
							<CloudDownloadIcon />
							<Input type="file" hidden />
						</Button>
					</div>
				</div>
			</Box>
			<Box className={'input-frame'}>
				<div className={'long-input'}>
					<Label className={'spec-label'}>Username</Label>
					<Input
						className={'spec-input mb-nick'}
						type="text"
						placeholder={'Nick'}
						name="memberNick"
						onChange={memberNickHandler}
					/>
				</div>
			</Box>
			<Box className={'input-frame'}>
				<div className={'short-input'}>
					<label className={'spec-label'}>Phone</label>
					<Input
						className={'spec-input mb-phone'}
						type="text"
						placeholder={'Phone Number'}
						name="memberPhone"
						onChange={memberPhoneHadler}
					/>
				</div>
				<div className={'short-input'}>
					<label className={'spec-label'}>Address</label>
					<Input
						className={'spec-input  mb-address'}
						type="text"
						placeholder={'Address'}
						name="memberAddress"
						onChange={memberAddressrHandler}
					/>
				</div>
			</Box>
			<Box className={'input-frame'}>
				<div className={'long-input'}>
					<label className={'spec-label'}>Description</label>
					<textarea
						className={'spec-textarea mb-description'}
						placeholder={'Description'}
						name="memberDesc"
						onChange={memberDescriptionHandler}
					/>
				</div>
			</Box>
			<Box className={'save-box'}>
				<Button
					variant={'contained'}
					onClick={handleSubmitButton}
					sx={{
						backgroundColor: '#CC3334',
						'&:hover': {
							backgroundColor: '#b12c2d', // hover holatida biroz quyuqroq rang
						},
					}}
				>
					Save
				</Button>
			</Box>
		</Box>
	);
}
