import { useCafeuContext } from '../../context/CafeuContext';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useGlobals } from '../hooks/useGlobals';
import { T } from '../../../libs/types/common';
import { Messages } from '../../../libs/config';
import { LoginInput, MemberInput } from '../../../libs/types/member';
import MemberService from '../../services/MemberService';
import { useNavigate } from 'react-router-dom';

interface AuthenticationModalProps {
	handleLoginClose: () => void;
}

const LoginForm = (props: AuthenticationModalProps) => {
	const { handleLoginClose } = props;
	const { passwordVisible, togglePasswordVisibility } = useCafeuContext();
	const [memberNick, setMemberNick] = useState<string>('');
	const [memberPassword, setMemberPassword] = useState<string>('');
	const { setAuthMember } = useGlobals();
	const navigate = useNavigate();

	/** HANDLERS **/

	// const handleFormSubmit = async (e: React.FormEvent) => {
	// 	try {
	// 		e.preventDefault();

	// 		if (!memberNick && !memberPassword) {
	// 			toast.error('Please fill out all fields.', { position: 'top-right' });
	// 		} else if (!memberPassword) {
	// 			toast.warning('Please provide password.', { position: 'top-right' });
	// 		} else if (!memberNick) {
	// 			toast.warning('Please provide user name.', { position: 'top-right' });
	// 		}

	// 		const loginInput: LoginInput = {
	// 			memberNick,
	// 			memberPassword,
	// 		};

	// 		const member = new MemberService();
	// 		const result = await member.login(loginInput);

	// 		if (!result) {
	// 			toast.error('Login failed. Please try again.', { position: 'top-right' });
	// 			return;
	// 		}
	// 		setAuthMember(result);
	// 		setMemberNick('');
	// 		setMemberPassword('');
	// 		handleLoginClose();
	// 	} catch (err) {
	// 		console.log(err);
	// 		handleLoginClose();
	// 	}
	// };
	const handleFormSubmit = async (e: React.FormEvent) => {
		try {
			e.preventDefault();

			if (!memberNick && !memberPassword) {
				toast.error('Please fill out all fields.', { position: 'top-right' });
				return;
			} else if (!memberPassword) {
				toast.warning('Please provide password.', { position: 'top-right' });
				return;
			} else if (!memberNick) {
				toast.warning('Please provide user name.', { position: 'top-right' });
				return;
			}

			const loginInput: LoginInput = {
				memberNick,
				memberPassword,
			};

			const member = new MemberService();
			const result = await member.login(loginInput);

			if (!result) {
				toast.error('Login failed. Please try again.', { position: 'top-right' });
				return;
			} else {
				toast.success('Signed in successfully!', { position: 'top-right' });
			}

			setAuthMember(result);
			setMemberNick('');
			setMemberPassword('');
			handleLoginClose();
		} catch (err: any) {
			toast.error('Login failed. Please try again.', { position: 'top-right' });
			setTimeout(() => {
				navigate('/signup');
			}, 2000);
			return;
		}
	};

	return (
		<form className="login-form login-form-login login" onSubmit={handleFormSubmit}>
			<p className="login-form-row login-form-row--wide form-row form-row-wide">
				<label htmlFor="username">
					Username or email address&nbsp;
					<span className="required">*</span>
				</label>
				<input
					type="text"
					className="login-Input login-Input--text input-text"
					name="username"
					id="username"
					value={memberNick}
					onChange={(e) => setMemberNick(e.target.value)}
				/>
			</p>

			<p className="login-form-row login-form-row--wide form-row form-row-wide">
				<label htmlFor="password">
					Password&nbsp;
					<span className="required">*</span>
				</label>
				<span className="password-input">
					<input
						className="login-Input login-Input--text input-text"
						type={passwordVisible ? 'text' : 'password'}
						name="password"
						id="password"
						autoComplete="current-password"
						value={memberPassword}
						onChange={(e) => setMemberPassword(e.target.value)}
					/>
					<span className="show-password-input" role="button" onClick={togglePasswordVisibility}></span>
				</span>
			</p>

			<p className="form-row">
				<button
					type="submit"
					className="login-button button login-form-login__submit wp-element-button"
					name="login"
					value="Log in"
				>
					Log in
				</button>
			</p>
		</form>
	);
};

export default LoginForm;
