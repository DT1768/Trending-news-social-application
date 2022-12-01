import React,{useState,useEffect} from "react";
import {Link, withRouter, useHistory} from 'react-router-dom';
import { API } from "../backend";
import "../styles.css";
import { getUser} from "./helper/userhelper";
import Cookies from "js-cookie";

const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return {color: "#800080"};
    }
};


const HeaderPrimary = (history) => {

    const abc = useHistory();

    //const user = localStorage.getItem("userId");

    const [error, setError] = useState(false);
    const [user, setUser] = useState({});

    const loadUser = () => {
        getUser().then(data => {
            if (data.error) {
                setError(data.error);
            }
            else {
                setUser(data);

            }
        })
    }

    useEffect(() => {
        loadUser()
    }, [])

    const header = () =>{

        //const loginURL = `${API}/googlelogin`;
        //const logoutURL = `${API}/logout`
        return(
            <nav className="navbar justify-content-between">
                <a href="/home" className="navbar-brand">
                            <img src="https://i.ibb.co/NV1tJFB/01.jpg" width="300" height="100" alt="Logo" className="d-inline-block align-middle" />
                        </a>
                        <h5 className="text-primary">
                            Welcome,{user.name}
                        </h5>
                        <ul className="nav nav-tabs ">
                            <li className="nav-item"><Link style={currentTab(history,"/home")} className="nav-link" to="/home"> Trending News </Link></li>
                            <li className="nav-item"><Link style={currentTab(history, "/explore")} className="nav-link" to="/explore"> Explore News </Link></li>
                            <li className="nav-item"><Link style={currentTab(history,"/friends")} className="nav-link" to="/home"> Friends </Link></li>
                            <li className="nav-item"><Link style={currentTab(history,"/logout")} className="nav-link" onClick={localStorage.removeItem("user")} to="/"> Logout </Link></li>
                        </ul>
            </nav>
        );
    }

    return(
        <div>
            {header()}
        </div>
    )
}

export default withRouter(HeaderPrimary);