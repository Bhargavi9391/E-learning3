// Importing JSON data directly
import coursesData from '../data2/Courses.json';

import React, { useState } from 'react';

const CourseList = () => {
    const [courses, setCourses] = useState(coursesData); // Use the imported data directly

    return (
        <div>
            <h2 style={{marginLeft:'520px',
                        color:'green'
            }} >Course Listings</h2>
            <div id="course-list">
                {courses.length > 0 ? (
                    courses.map((course, index) => (
                        <div key={index} className="course-item">
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <p><strong>Instructor:</strong> {course.instructor}</p>
                            <p><strong>Syllabus:</strong> {course.syllabus}</p>
                        </div>
                    ))
                ) : (
                    <p>No courses available.</p>
                )}
            </div>
        </div>
    );
};

export default CourseList;
