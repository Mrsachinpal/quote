import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Mainnavbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user is authenticated when component mounts
        checkAuthentication();
    }, []);

    const checkAuthentication = async () => {
        try {
            const res = await axios.get("/api/check-auth");
            setIsLoggedIn(res.data.isAuthenticated); // Update isLoggedIn based on authentication response
        } catch (error) {
            console.error("Error checking authentication", error);
        }
    };

    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:8080/logout');
            setIsLoggedIn(false); // Update isLoggedIn to false after logout
        } catch (error) {
            console.error("Error logging out", error);
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg border ">
                <div className="container mx-auto w-50">
                    <Link className="navbar-brand" to={'/quote'}>Quotes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/author'}>Authors</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/tags'}>Tags</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>Quote of the day</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/allimagequote'}>Picture Quote</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/add'}>New Quotes</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-user"></i> My Account
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={'#'}>Action</Link></li>
                                    <li><Link className="dropdown-item" to={'#'}>Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    {isLoggedIn && (
                                        <li>
                                            <Link className="dropdown-item" to={'/logout'} onClick={handleLogout}>
                                                logout
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </li> */}
                        </ul>
                        {/* <ul className="navbar-nav mb-2 mb-lg-0"> */}
                            {/* {isLoggedIn ? (
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/logout'} onClick={handleLogout}>
                                        Logout
                                    </Link>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/login'}>
                                        Login
                                    </Link>
                                </li>
                            )} */}

                            {/* {!isLoggedIn && (
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/login'}>
                                        Login
                                    </Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <Link className="nav-link" to={'/login/register'}>Sign up</Link>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Mainnavbar;
