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
  // Split the description by newline characters and map over the resulting array
  const descriptionLines = description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br /> {/* Add a line break after each line */}
    </React.Fragment>
  ));

  return (
    <article className="product-card" style={{minWidth:'215px'}}>
      <a className="stretched-link">
        {/* Product image */}
        <div className="img-carousel">
          <div className="items">
            <img src={imageUrl} alt="Product" />
          </div>
        </div>
      </a>

      <header>
        {/* Product name */}
        <h4 itemProp="name">{descriptionLines}</h4>
        {/* User icon */}
        <a href={link} target="_blank" className="user" style={{ position: 'relative' }} rel="noreferrer">
          <img className="user avatar" src={iconUrl} alt="Icon" />
          {creator}
        </a>
        <div className="rating" aria-label="Rating" style={{ marginTop: 'var(--spacer-2)' }}>
          <span className="icon icon-solid-star"></span>
          <span className="rating-average">4.9</span>
          <span title="4.9 ratings">({rating})</span>
        </div>
      </header>

      <footer>
        <div itemScope itemProp="offers" itemType="https://schema.org/Offer" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="has-tooltip right" aria-describedby=":rb:">
            <div className="price" itemProp="price" content="0">
              {price}
            </div>
            <div role="tooltip" id=":rb:">$0+</div>
          </div>
          <link
            itemProp="url"
            href="https://abaga.gumroad.com/l/BbGVh?layout=discover&amp;recommended_by=products_for_you&amp;recommender_model_name=sales"
          />
          <div itemProp="availability" hidden>
            https://schema.org/InStock
          </div>
          <div itemProp="priceCurrency" hidden>
            usd
          </div>
        </div>
      </footer>
    </article>
  );
};

export default Card;
