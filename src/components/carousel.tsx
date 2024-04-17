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
  const cardWidth = 215; // Width of each card
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
        const totalWidth = (cardWidth + cardGap) * cardsPerPage;
        setCarouselWidth(totalWidth);
        const margin = (containerWidth - totalWidth) / 5;
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
    const scrollDistance = (cardWidth + cardGap) ; // Scroll by the width of two cards
    scrollByDistance(-scrollDistance);
  };

  const scrollToRight = () => {
    const scrollDistance = (cardWidth + cardGap); // Scroll by the width of two cards
    scrollByDistance(scrollDistance);
  };

  return (
    <div style={{display:'flex'}}>
      <button className="card-carousel-button" onClick={scrollToLeft} style={{marginLeft:buttonMargin}}>
        <ArrowBackIosIcon fontSize="large" />
      </button>
      <div ref={carouselRef} className="product-card-carousel" style={{ display: 'flex', width:carouselWidth, gap:'10px'}}>
          {children}
      </div>
      <button className="card-carousel-button" onClick={scrollToRight} style={{marginRight:buttonMargin}}>
        <ArrowForwardIosIcon fontSize="large" />
      </button>
    </div>
  );
};

export default Carousel;
