import React from "react";
import "./CoursesSection.css";

const courses = [
  {
    title: "Web Development",
    image: "course1.jpg",
    description: "Learn HTML, CSS, and JavaScript",
  },
  {
    title: "Data Science",
    image: "course2.jpg",
    description: "Master Python and Data Analysis",
  },
  {
    title: "Digital Marketing",
    image: "course3.jpg",
    description: "Become a marketing expert",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="courses">
      <h2>Our Courses</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
