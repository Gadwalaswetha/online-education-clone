import React from 'react';
import './FeaturedCourseCard.css';

const FeaturedCourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <button>Learn More</button>
    </div>
  );
};

export default FeaturedCourseCard;
