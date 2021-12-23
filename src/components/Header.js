import { Link } from 'react-router-dom';

import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
    const { user ,login } = useContext(AuthContext);

    const logOut = (e) => {
        e.preventDefault();
        
        login({});
        
    }


    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    
                    <span>Welcome, <Link className="button" to="/change_info">{user.nm}</Link></span>
                    &nbsp;
                    <Link className="button" to="/car/list">My Cars</Link>
                    &nbsp;
                    <Link className="button" to="/car/add">Add Car</Link>
                    &nbsp;
                    <Link className="button" to="/car/search">Search Cars</Link>
                    &nbsp;
                    <Link className="button" to="/login">Login</Link>
                    &nbsp;
                    {
                        user.sess ?
                            <a href="#" className="button" onClick={logOut} >Logout</a>

                        :
                            <Link className="button" to="/register">Register</Link>
                    }
                    &nbsp;
                </section>
            </nav>
        </header>
    );
}

export default Header;