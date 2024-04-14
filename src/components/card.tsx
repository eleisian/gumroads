// Card.tsx

import React from 'react';

interface CardProps {
  imageUrl: string;
  description: string;
  creator: string;
  iconUrl: string;
  rating: number;
  price: number;
  link: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  onMouseMove?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  description,
  creator,
  iconUrl,
  rating,
  price,
  link,
  onClick,
  onMouseDown,
  onMouseUp,
  onMouseMove,
}) => {
  return (
    <div className="card-link">
      <a
        href={link}
        onClick={onClick}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className="card">
          <img src={imageUrl} alt="Product" />
          <div className="card-details">
            <p>{description}</p>
            <p>Creator: {creator}</p>
            <img src={iconUrl} alt="Icon" />
            <div className="rating">Rating: {rating}</div>
            <div className="price">Price: ${price}</div>
          </div>
        </div>
      </a>
    </div>
  );
};


export default Card;
