import "./Navbar.css";
import {Link} from "react-router-dom";
import React from 'react';

function Navbar():JSX.Element{

    return(
        <div className="nav-bar">
           <Link to="/" className="title">Boolean Quizzo</Link>
           <Link to="/categories" className="categories"><h3>Categories</h3></Link> 
        </div>
    );
}

export { Navbar };