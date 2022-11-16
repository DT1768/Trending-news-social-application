import React from "react";
import {BsNewspaper} from "react-icons/bs";
import {FiLogIn,FiLogOut} from "react-icons/fi"
import {FaUser} from "react-icons/fa"
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

const Header = ({isAuthenticated = false}) => {
    return(
        <nav>
            <motion.div
            initial={{x:"-100%"}}
            whileInView={{x:0}}
            >
                <BsNewspaper />
            </motion.div>
            <div>
                <Link to="/updateprofile">Update Profile</Link>
                <Link to="/newshome">News</Link>
                <Link to="/friendshome">Friends</Link>
                <Link to={isAuthenticated?"/me":"/login"}>{isAuthenticated?<FaUser />:<FiLogIn/>}</Link>

            </div>
        </nav>
    );
};

export default Header;