import React from "react";
import {Link} from "react-router-dom";
import "./header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">Student Manager</Link></div>
            
            <div className="links">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/addStudent">Add</Link>
                    <Link to="/about">About</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;
