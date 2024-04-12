// Carousel.tsx

import React, { useState, useRef } from 'react';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [clickEvent, setClickEvent] = useState<MouseEvent | null>(null);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(event.clientX);
      setScrollLeft(carouselRef.current.scrollLeft);
      event.preventDefault(); // Prevent default browser action (e.g., link activation)
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    event.preventDefault(); // Prevent default text selection
    const x = event.clientX;
    const walk = (x - startX) * 2; // Adjust the multiplier for faster scrolling
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };
  const threshold = 10000000; // Adjust this threshold value as needed

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      // If dragging was detected, prevent link activation
      event.preventDefault(); // Prevent default link activation behavior
    } else if (clickEvent !== null) {
      // If it's a click event (no dragging), allow link activation
      const dx = Math.abs(event.clientX - clickEvent.clientX);
      const dy = Math.abs(event.clientY - clickEvent.clientY);
      const swipeThreshold = 10; // Adjust this value as needed

      // Check if the movement is predominantly horizontal and beyond the swipe threshold
      if (dx > dy && dx > swipeThreshold) {
        event.preventDefault(); // Prevent default link activation behavior
        setClickEvent(null);
      } else if (dx < threshold && dy < threshold) {
        // If movement is within the threshold, consider it a click
        setClickEvent(null);
      }
    }
    setIsDragging(false);
  };

  const handleCardClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDragging) {
      event.preventDefault(); // Prevent link navigation if dragging
    }
  };

  return (
    <div
      ref={carouselRef}
      className="carousel"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {children}
    </div>
  );
};

export default Carousel;
