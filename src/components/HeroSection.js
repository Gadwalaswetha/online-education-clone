import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const carouselImages = [
  "https://thinkbigcoachingacademy.com/wp-content/uploads/2021/08/Think-Big-Coaching-Academy-Logo.jpg",
  "https://i.ytimg.com/vi/24XgolhWjV4/maxresdefault.jpg",
  "https://i.pinimg.com/originals/12/fb/14/12fb144a72112b4271f0314face6b8af.jpg",
  "https://bestcoachingindelhi.com/wp-content/uploads/2023/02/Clat-4-1-1-1.png",
  "https://thehinduzone.com/wp-content/uploads/2022/07/Top-IIT-JEE-Coaching-in-India.jpg",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div
        className="carousel"
        style={{
          backgroundImage: `url(${carouselImages[currentIndex]})`,
        }}
      >
        <div className="hero-content">
          <button className="hero-btn">Get Started</button>
        </div>
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
