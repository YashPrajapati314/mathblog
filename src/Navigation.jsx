import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return(
        <>
            <div className="navigation-container">
                <div className="navigation">
                    <ul className="nav">
                        <li className="nav">
                            <Link to="/" className="nav-link"><h2 className="navtext">Home</h2></Link>
                        </li>
                        <li className="nav">
                            <Link to="/blog" className="nav-link"><h2 className="navtext">Blog</h2></Link>
                        </li>
                        <li className="nav">
                            <Link to="/about" className="nav-link"><h2 className="navtext">About</h2></Link>
                        </li>
                        <li className="nav">
                            <Link to="/login" className="nav-link"><h2 className="navtext">Login</h2></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navigation;