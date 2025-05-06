import { useCafeuContext } from '../../context/CafeuContext';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useGlobals } from '../hooks/useGlobals';
import { MemberInput } from '../../../libs/types/member';
import MemberService from '../../services/MemberService';

const SignupForm = () => {
	const { passwordVisible, togglePasswordVisibility } = useCafeuContext();
	const [memberNick, setMemberNick] = useState<string>('');
	const [memberPhone, setMemberPhone] = useState<string>('');
	const [memberPassword, setMemberPassword] = useState<string>('');
	const { setAuthMember } = useGlobals();

	/** HANDLERS **/
	const handleFormSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!memberNick && !memberPassword) {
			toast.error('Please fill out all fields.', { position: 'top-right' });
		} else if (!memberPassword) {
			toast.warning('Please provide password.', { position: 'top-right' });
		} else if (!memberNick) {
			toast.warning('Please provide user name.', { position: 'top-right' });
		} else if (!memberPhone) {
			toast.warning('Please provide user phone.', { position: 'top-right' });
		} else {
			// If the form is successfully submitted, show a success toast
			toast.success('Signed In successfully!', { position: 'top-right' });
			setMemberNick('');
			setMemberPhone('');
			setMemberPassword('');
		}

		const signupInput: MemberInput = {
			memberNick: memberNick,
			memberPhone: memberPhone,
			memberPassword: memberPassword,
		};
		const member = new MemberService();
		const result = await member.signup(signupInput);

		setAuthMember(result);
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
				<label htmlFor="userphone">
					Phone Number&nbsp;
					<span className="required">*</span>
				</label>
				<input
					type="text"
					className="login-Input login-Input--text input-text"
					name="userphone"
					id="userphone"
					value={memberPhone}
					onChange={(e) => setMemberPhone(e.target.value)}
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
					Sign up
				</button>
			</p>
		</form>
	);
};

export default SignupForm;
