import {Link} from "react-router-dom";
import {API} from "../backend";


const  Login = () => {
	
	const googleAuth = () => {
		window.open(
			`${API}/googlelogin`,
			"_self"
		);
	}

	return (
		<div className="container">
			<h1 className="text-primary">Social Media News App</h1>
			<h2>Log in to continue</h2>
			<button className="btn" onClick={googleAuth}>
				<img className="img px-2" src="https://i.ibb.co/XYT3xHz/google.png" width={60} height={50} alt="google icon" />
				
				<span>sign in with Google</span>
			</button>
		</div>
	);
}

export default Login;