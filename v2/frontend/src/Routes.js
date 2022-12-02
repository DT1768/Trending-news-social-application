import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./core/Home";
import ExploreNews from "./core/ExploreNews";
import Login from "./user/Login";
import Logout from "./user/Logout";

const Routes1 = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component = {Login} />
            <Route path="/home" exact component = {Home} />
            {/* <Route path="/logout" exact component = {Logout} /> */}
            <Route path="/explore" exact component = {ExploreNews} />
        </Switch>
        </BrowserRouter>
    );
}

export default Routes1;