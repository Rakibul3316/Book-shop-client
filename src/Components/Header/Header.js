import React from 'react';
import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/">
                            <img src="/icons/Logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="col-md-8">
                        <nav>
                            <Link to="/home">Home</Link>
                            <Link to="/orders">Orders</Link>
                            <Link to="/admin">Admin</Link>
                            <Link to="/login">Lon In</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;