import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            navigate('/login');
        } else {
            setUsername(user);
            // Fetch enrolled courses (for demonstration, we'll just use sample data)
            setCourses([
                { title: "React for Beginners", progress: 50 },
                { title: "Advanced JavaScript", progress: 80 },
                { title: "CSS Mastery", progress: 20 }
            ]);
        }
    }, [navigate]);

    return (
        <div className="dashboard-container">
            <div className="welcome-section">
                <h2>Welcome, {username}</h2>
                <p>Here's a quick overview of your learning progress</p>
            </div>
            <div className="courses-section">
                <h3>Enrolled Courses</h3>
                <div className="course-list">
                    {courses.map((course, index) => (
                        <div key={index} className="course-card">
                            <h4>{course.title}</h4>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${course.progress}%` }}>
                                    {course.progress}%
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
