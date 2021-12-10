import { Link } from 'react-router-dom';

import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    
                    <span>Welcome, {user.nm}</span>
                    <Link className="button" to="/login">Login</Link>
                    <Link className="button" to="/car/list">My Cars</Link>
                    <Link className="button" to="/car/search">Search Cars</Link>
                </section>
            </nav>
        </header>
    );
}

export default Header;