import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./core/Home";

const Routes1 = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home />} />
        </Routes>
        </BrowserRouter>
    );
}

export default Routes1;