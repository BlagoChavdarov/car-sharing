import { Routes, Route, Link } from 'react-router-dom';

import TypeList from '../TypeList/TypeList';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <nav>
                <Link to="types">Types</Link>
            </nav>

            <section>
                <Routes>
                    <Route path="/" element={<TypeList />} />
                </Routes>
            </section>

        </section>
        
    );
}

export default Dashboard;