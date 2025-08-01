// import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
// import { Fab, Stack, TextField } from "@mui/material";
// import LoginIcon from "@mui/icons-material/Login";
// import MemberService from "../../services/MemberService";
// import { sign } from "crypto";
// import { T } from "../../../libs/types/common";
// import { useGlobals } from "../hooks/useGlobals";
// import { Messages } from "../../../libs/config";
// import { LoginInput, MemberInput } from "../../../libs/types/member";
// import { sweetErrorHandling } from "../../../libs/sweetAlert";






// interface AuthenticationModalProps {
// 	signupOpen: boolean;
// 	loginOpen: boolean;
// 	handleSignupClose: () => void;
// 	handleLoginClose: () => void;
// }

// export default function AuthenticationModal(props: AuthenticationModalProps) {
// 	const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
// 	const classes = useStyles();
// 	const [memberNick, setMemberNick] = useState<string>("");
// 	const [memberPhone, setMemberPhone] = useState<string>("");
// 	const [memberPassword, setMemberPassword] = useState<string>("");
// 	const { setAuthMember } = useGlobals();

// 	/** HANDLERS **/

// 	const handleUsername = (e: T) => {
// 		setMemberNick(e.target.value);
// 	};

// 	const handlePhone = (e: T) => {
// 		setMemberPhone(e.target.value);
// 	};

// 	const handlePassword = (e: T) => {
// 		setMemberPassword(e.target.value);
// 	};
// 	const hadlePasswordKeyDown = (e: T) => {
// 		if (e.key === "Enter" && signupOpen) {
// 			handleSignupRequest().then();
// 		} else if (e.key === "Enter" && loginOpen) {
// 			handleLoginRequest().then();
// 		}
// 	};

// 	const handleSignupRequest = async () => {
// 		try {
// 			const isFullfill =
// 				memberNick !== "" && memberPhone !== "" && memberPassword !== "";
// 			if (!isFullfill) throw new Error(Messages.error3);

// 			const signupInput: MemberInput = {
// 				memberNick: memberNick,
// 				memberPhone: memberPhone,
// 				memberPassword: memberPassword,
// 			};

// 			const member = new MemberService();
// 			const result = await member.signup(signupInput);

// 			setAuthMember(result);
// 			handleSignupClose();
// 		} catch (err) {
// 			console.log(err);
// 			handleSignupClose();
// 			sweetErrorHandling(err).then();
// 		}
// 	};

// 	const handleLoginRequest = async () => {
// 		try {
// 			const isFullfill = memberNick !== "" && memberPassword !== "";
// 			if (!isFullfill) throw new Error(Messages.error3);

// 			const loginInput: LoginInput = {
// 				memberNick,
// 				memberPassword,
// 			};

// 			const member = new MemberService();
// 			const result = await member.login(loginInput);

// 			setAuthMember(result);
// 			handleLoginClose();
// 		} catch (err) {
// 			console.log(err);
// 			handleLoginClose();
// 			sweetErrorHandling(err).then();
// 		}
// 	};

// 	return (
// 		<div>
// 			<Modal
// 				aria-labelledby="transition-modal-title"
// 				aria-describedby="transition-modal-description"
// 				className={classes.modal}
// 				open={signupOpen}
// 				onClose={handleSignupClose}
// 				closeAfterTransition
// 				BackdropComponent={Backdrop}
// 				BackdropProps={{
// 					timeout: 500,
// 				}}>
// 				<Fade in={signupOpen}>
// 					<Stack
// 						className={classes.paper}
// 						direction={"row"}
// 						sx={{ width: "800px" }}>
// 						<ModalImg src={"/img/auth.webp"} alt="camera" />
// 						<Stack sx={{ marginLeft: "69px", alignItems: "center" }}>
// 							<h2>Signup Form</h2>
// 							<TextField
// 								sx={{ marginTop: "7px" }}
// 								id="outlined-basic"
// 								label="username"
// 								variant="outlined"
// 								onChange={handleUsername}
// 							/>
// 							<TextField
// 								sx={{ my: "17px" }}
// 								id="outlined-basic"
// 								label="phone number"
// 								variant="outlined"
// 								onChange={handlePhone}
// 							/>
// 							<TextField
// 								id="outlined-basic"
// 								label="password"
// 								variant="outlined"
// 								onChange={handlePassword}
// 								onKeyDown={hadlePasswordKeyDown}
// 							/>
// 							<Fab
// 								sx={{ marginTop: "30px", width: "120px" }}
// 								variant="extended"
// 								color="primary"
// 								onClick={handleSignupRequest}>
// 								<LoginIcon sx={{ mr: 1 }} />
// 								Signup
// 							</Fab>
// 						</Stack>
// 					</Stack>
// 				</Fade>
// 			</Modal>

// 			<Modal
// 				aria-labelledby="transition-modal-title"
// 				aria-describedby="transition-modal-description"
// 				className={classes.modal}
// 				open={loginOpen}
// 				onClose={handleLoginClose}
// 				closeAfterTransition
// 				BackdropComponent={Backdrop}
// 				BackdropProps={{
// 					timeout: 500,
// 				}}>
// 				<Fade in={loginOpen}>
// 					<Stack
// 						className={classes.paper}
// 						direction={"row"}
// 						sx={{ width: "700px" }}>
// 						<ModalImg src={"/img/auth.webp"} alt="camera" />
// 						<Stack
// 							sx={{
// 								marginLeft: "65px",
// 								marginTop: "25px",
// 								alignItems: "center",
// 							}}>
// 							<h2>Login Form</h2>
// 							<TextField
// 								id="outlined-basic"
// 								label="username"
// 								variant="outlined"
// 								sx={{ my: "10px" }}
// 								onChange={handleUsername}
// 							/>
// 							<TextField
// 								id={"outlined-basic"}
// 								label={"password"}
// 								variant={"outlined"}
// 								type={"password"}
// 								onChange={handlePassword}
// 								onKeyDown={hadlePasswordKeyDown}
// 							/>
// 							<Fab
// 								sx={{ marginTop: "27px", width: "120px" }}
// 								variant={"extended"}
// 								color={"primary"}
// 								onClick={handleLoginRequest}>
// 								<LoginIcon sx={{ mr: 1 }} />
// 								Login
// 							</Fab>
// 						</Stack>
// 					</Stack>
// 				</Fade>
// 			</Modal>
// 		</div>
// 	);
// }
// function useStyles() {
//     throw new Error("Function not implemented.");
// }

