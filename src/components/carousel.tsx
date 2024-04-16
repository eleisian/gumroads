import React, { useRef, useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [buttonMargin, setButtonMargin] = useState<number>(0);
  const cardWidth = 200; // Width of each card
  const cardGap = 10; // Gap between cards

  useEffect(() => {
    const updateCarouselDimensions = () => {
      if (carouselRef.current) {
        const containerWidth = window.innerWidth;
        let cardsPerPage;
        if (containerWidth <= 600) {
          cardsPerPage = 2; // For small screens, show 2 cards per page
        } else if (containerWidth <= 960) {
          cardsPerPage = 3; // For medium screens, show 3 cards per page
        } else {
          cardsPerPage = 5; // For larger screens, show 5 cards per page
        }
        const totalWidth = (cardWidth + cardGap) * cardsPerPage - cardGap;
        setCarouselWidth(totalWidth);
      }
    };

    updateCarouselDimensions(); // Update dimensions initially
    window.addEventListener('resize', updateCarouselDimensions); // Update dimensions on window resize

    return () => {
      window.removeEventListener('resize', updateCarouselDimensions); // Remove event listener on component unmount
    };
  }, [cardWidth, cardGap]);

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