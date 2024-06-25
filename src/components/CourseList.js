import React, { useEffect, useState } from 'react';

const CourseList = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/data2/courses.json')
            .then(response => response.json())
            .then(data => setCourses(data));
    }, []);

    return (
        <div>
            <h2 style={{marginLeft:'500px',
                        fontSize:'28px',
                        color:'green'
            }}>Course Listings</h2>
            <div id="course-list">
                {courses.map((course, index) => (
                    <div key={index} className="course-item">
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <p><strong>Instructor:</strong> {course.instructor}</p>
                        <p><strong>Syllabus:</strong> {course.syllabus}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseList;
