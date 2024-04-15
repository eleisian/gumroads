import React, { useRef, useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const cardWidth = 200; // Width of each card
  const cardGap = 10; // Gap between cards
  const cardsPerPageLarge = 5; // Default number of cards per page for larger screens
  const cardsPerPageSmall = 2; // Number of cards per page for mobile devices

  useEffect(() => {
    const updateCarouselWidth = () => {
      if (carouselRef.current) {
        const screenWidth = window.innerWidth;
        const cardsPerPage = screenWidth <= 768 ? cardsPerPageSmall : cardsPerPageLarge;
        const totalWidth = (cardWidth + cardGap) * cardsPerPage - cardGap;
        setCarouselWidth(totalWidth);
      }
    };

    updateCarouselWidth(); // Update width initially
    window.addEventListener('resize', updateCarouselWidth); // Update width on window resize

    return () => {
      window.removeEventListener('resize', updateCarouselWidth); // Remove event listener on component unmount
    };
  }, [cardWidth, cardGap, cardsPerPageLarge, cardsPerPageSmall]);

  const scrollByDistance = (distance: number) => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollBy({
        left: distance,
        behavior: 'smooth',
      });
    }
  };

  const scrollToLeft = () => {
    const scrollDistance = (cardWidth + cardGap) * 2; // Scroll by the width of two cards
    scrollByDistance(-scrollDistance);
  };

  const scrollToRight = () => {
    const scrollDistance = (cardWidth + cardGap) * 2; // Scroll by the width of two cards
    scrollByDistance(scrollDistance);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button" onClick={scrollToLeft}>
        <ArrowBackIosIcon fontSize="large" />
      </button>
      <div ref={carouselRef} className="carousel" style={{ width: `${carouselWidth}px`, overflowX: 'auto' }}>
        <div style={{ display: 'flex', gap: '0.625rem' }}>
          {children}
        </div>
      </div>
      <button className="carousel-button" onClick={scrollToRight}>
        <ArrowForwardIosIcon fontSize="large" />
      </button>
    </div>
  );
};

export default Carousel;
