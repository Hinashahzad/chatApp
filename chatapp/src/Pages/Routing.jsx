import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";
import Home from "./Home";

const Routing = () =>
{
    return ( <>
         <Router>
            <Routes>
                <Route path="/" element={ <Registration />}></Route>
                <Route path="/Registration" element={ <Registration /> }></Route>
                <Route path="/Login" element={ <Login /> }></Route>
                <Route path="/Home" element={ <Home /> }></Route>
                <Route path="/Home/:uid" element={  <Home />  }></Route>
            </Routes>
        </Router>
    </> );
};
export default Routing;