import React, { useRef, useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForward';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [buttonMargin, setButtonMargin] = useState<number>(0);
  const [cardWidth, setCardWidth] = useState<number>(0);; // Initial width of each card
  const cardGap = 11; // Gap between cards

  useEffect(() => {
    const updateCarouselDimensions = () => {
      if (carouselRef.current) {
        const containerWidth = window.innerWidth;
        let cardsPerPage;
        if (containerWidth <= 600) {
          cardsPerPage = 2; // For small screens, show 2 cards per page
          setCardWidth(195); // Adjust card width for mobile devices
        } else if (containerWidth <= 960) {
          cardsPerPage = 3; // For medium screens, show 3 cards per page
          setCardWidth(215); // Reset card width for larger screens
        } else {
          cardsPerPage = 5; // For larger screens, show 5 cards per page
          setCardWidth(215); // Reset card width for larger screens
        }
        const totalWidth = (cardWidth + cardGap) * cardsPerPage;
        setCarouselWidth(totalWidth);
        let marginMultiplier;
        if (containerWidth >= 1920) {
          marginMultiplier = 3;
        } else {
          marginMultiplier = 5;
        }
        const margin = (containerWidth - totalWidth) / marginMultiplier;
        setButtonMargin(margin);
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
    const scrollDistance = carouselWidth; // Scroll by half of carousel width
    scrollByDistance(-scrollDistance);
  };

  const scrollToRight = () => {
    const scrollDistance = carouselWidth; // Scroll by half of carousel width
    scrollByDistance(scrollDistance);
  };

  return (
    <div style={{ display: 'flex' }}>
      <button className="card-carousel-button" onClick={scrollToLeft} style={{ marginLeft: buttonMargin}}>
        <ArrowBackIosIcon fontSize="large" />
      </button>
      <div ref={carouselRef} className="product-card-carousel" style={{ width: `auto`, overflowX: 'scroll'}}>
        {children}
      </div>
      <button className="card-carousel-button" onClick={scrollToRight} style={{ marginRight: buttonMargin}}>
        <ArrowForwardIosIcon fontSize="large" />
      </button>
    </div>
  );
};

export default Carousel;
