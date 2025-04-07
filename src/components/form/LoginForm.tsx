import { useCafeuContext } from "../../context/CafeuContext";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
	const { passwordVisible, togglePasswordVisibility } = useCafeuContext();
	const [userName, setUserName] = useState("");

	const [password, setPassword] = useState("");
	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!userName && !password) {
			toast.error("Please fill out all fields.", { position: "top-right" });
		} else if (!password) {
			toast.warning("Please provide password.", { position: "top-right" });
		} else if (!userName) {
			toast.warning("Please provide user name.", { position: "top-right" });
		} else {
			// If the form is successfully submitted, show a success toast
			toast.success("Signed In successfully!", { position: "top-right" });
			setUserName("");
			setPassword("");
		}
	};

	return (
		<form
			className="login-form login-form-login login"
			onSubmit={handleFormSubmit}>
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
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
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
						type={passwordVisible ? "text" : "password"}
						name="password"
						id="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<span
						className="show-password-input"
						role="button"
						onClick={togglePasswordVisibility}></span>
				</span>
			</p>

			<p className="form-row">
				<button
					type="submit"
					className="login-button button login-form-login__submit wp-element-button"
					name="login"
					value="Log in">
					Log in
				</button>
			</p>
		</form>
	);
};

export default LoginForm;
