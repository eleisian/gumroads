import React, { useRef, useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface CarouselProps {
  children: React.ReactNode;
  cardsPerPage?: number; // Optionally allow specifying the number of cards to display per page
}

const Carousel: React.FC<CarouselProps> = ({ children, cardsPerPage = 5 }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [buttonPadding, setButtonPadding] = useState<number>(10); // Default padding value

  useEffect(() => {
    const updateCarouselWidth = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const cardWidth = 200; // Adjust as per your card width
        const cardGap = 10; // Adjust as per your gap between cards
        const totalWidth = (cardWidth + cardGap) * cardsPerPage - cardGap; // Subtract the last card's gap
        setCarouselWidth(totalWidth);
        
        // Calculate button padding dynamically based on screen width
        const screenWidth = window.innerWidth;
        const maxButtonPadding = 10; // Maximum padding value
        const minButtonPadding = 5; // Minimum padding value
        const paddingScale = (screenWidth - 768) / 768; // Scale the padding based on screen width
        const adjustedPadding = maxButtonPadding - (maxButtonPadding - minButtonPadding) * paddingScale;
        setButtonPadding(adjustedPadding);
      }
    };

    updateCarouselWidth(); // Update width initially
    window.addEventListener('resize', updateCarouselWidth); // Update width on window resize

    return () => {
      window.removeEventListener('resize', updateCarouselWidth); // Remove event listener on component unmount
    };
  }, [cardsPerPage]);

  const scrollToLeft = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollBy({
        left: -carouselWidth, // Scroll by the width of the carousel
        behavior: 'smooth', // Add smooth scrolling effect
      });
    }
  };

  const scrollToRight = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollBy({
        left: carouselWidth, // Scroll by the width of the carousel
        behavior: 'smooth', // Add smooth scrolling effect
      });
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button" style={{ padding: `0 ${buttonPadding}px` }} onClick={scrollToLeft}>
        <ArrowBackIosIcon fontSize="large" />
      </button>
      <div ref={carouselRef} className="carousel" style={{ width: `${carouselWidth}px` }}>
        {children}
      </div>
      <button className="carousel-button" style={{ padding: `0 ${buttonPadding}px` }} onClick={scrollToRight}>
        <ArrowForwardIosIcon fontSize="large" />
      </button>
    </div>
  );
};

export default Carousel;
