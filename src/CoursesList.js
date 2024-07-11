import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CoursesList.css'; // Import CSS file for styling

const CoursesList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading courses...</p>;
  }

  return (
    <div className="courses-list">
      <h2>Course List</h2>
      <div className="grid-container">
        {courses.map(course => (
          <div key={course.id} className="card">
            <h3>{course.title}</h3>
            <p>{course.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
