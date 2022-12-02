import { useHistory } from "react-router-dom";

const  Logout = () => {

    const logoutProcess = () => {
        //TODO: API
        localStorage.removeItem('userId')
    }
    
    const history = useHistory();

    const redirect = (path)=> {
        //history.push(path);
    }

	return (
		<div className="container">
			<h1 className="text-primary">Social Media News App</h1>
			<h2>Are you sure to logout?</h2>
			<button className="btn" onClick={logoutProcess()}>
				<span>Yes</span>
			</button>
            <button className="btn" onClick={redirect("/home")}>
				<span>No</span>
			</button>
		</div>
	);
}

export default Logout;