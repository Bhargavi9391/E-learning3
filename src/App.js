import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CourseList from './components/CourseList';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './index.css';

function App() {
    return (
        <Router>
            <div>
                <header>
                    <h1>E-Learning Platform</h1>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/dashboard">Dashboard</Link>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route exact path="/" element={<CourseList />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
