import { Link, Outlet, useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet'

function Layout() {

    const location = useLocation();

    return (
        <>
            <div className="container mt-5 p-5">

                <Helmet>
                    {
                        location.pathname === '/' ? (<title>MyAgency - Home</title>) : ""
                    }
                    {
                        location.pathname === '/about' ? (<title>MyAgency - About</title>) : ""
                    }
                    {
                        location.pathname === '/contact' ? (<title>MyAgency - Contact</title>) : ""
                    }
                </Helmet>


                <nav class="navbar navbar-expand-sm bg-light">
                    <div class="container-fluid">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/" className={`nav-link ${(location.pathname === '/') ? `fw-bold active` : ``}`}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" className={`nav-link ${(location.pathname === '/about') ? `fw-bold active` : ``}`}>About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" className={`nav-link ${(location.pathname === '/contact') ? `fw-bold active` : ``}`}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Outlet />
            </div>
        </>
    )
}

export default Layout;