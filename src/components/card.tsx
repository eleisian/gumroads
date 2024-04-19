import React from 'react';

interface CardProps {
  id:number;
  imageUrl: string;
  description: string;
  creator: string;
  iconUrl: string;
  rating: number;
  averageRating: number;
  price: number;
  link: string;
}

const Card: React.FC<CardProps> = ({
  id,
  imageUrl,
  description,
  creator,
  iconUrl,
  rating,
  averageRating,
  price,
  link,
}) => {
  // Split the description by newline characters and map over the resulting array
  const descriptionLines = description.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br /> {/* Add a line break after each line */}
    </React.Fragment>
  ));

  return (
    <article className="product-card" style={{minWidth:'215px',}}>
      <a className="stretched-link" href={link}>
        {/* Product image */}
        <div className="img-carousel" style={{borderBottom: 'solid .0625rem rgb(var(--color)/var(--border-alpha))', height:'100%', background:'url(https://assets.gumroad.com/packs/static/b47cbdb8030bef7eda53.png)'}}>
          <div className="items" style={{height:'100%'}}>
            <img src={imageUrl} className='preview' alt="Product" />
          </div>
        </div>
      </a>

      <header>
        {/* Product name */}
        <h4 itemProp="name">{descriptionLines}</h4>
        {/* User icon */}
        <a href={link} target="_blank" className="user" style={{ position: 'relative' }} rel="noreferrer">
          <img className="user-avatar" src={iconUrl} alt="Icon" />
          {creator}
        </a>
        <div className="rating" aria-label="Rating" style={{ marginTop: 'var(--spacer-2)' }}>
          <span className="icon icon-solid-star"></span>
          <span className="rating-average">{parseFloat(averageRating.toString()).toFixed(1)}</span>
          <span>({rating})</span>

        </div>
      </header>

      <footer>
        <div itemScope itemProp="offers" itemType="https://schema.org/Offer" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="has-tooltip right" aria-describedby=":rb:">
            <div className="price" itemProp="price" content="0">
              ${price}+
            </div>
            <div role="tooltip" id=":rb:">${price}+</div>
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
