import { Link } from 'react-router-dom';


const Header = () => {
    
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    
                    <span>Welcome, userName</span>
                    <Link className="button" to="/login">Login</Link>
                </section>
            </nav>
        </header>
    );
}

export default Header;