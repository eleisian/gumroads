// DiscoverPage.tsx

import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import searchIcon from '../assets/search.svg';
import './DiscoverPage.css';
import Carousel from '../components/carousel';
import Card from '../components/card';

interface SearchResult {
  id: number;
  name: string;
}

interface DiscoverPageProps {
  // Define props here
}

const DiscoverPage: React.FC<DiscoverPageProps> = () => {
  useEffect(() => {
    document.title = "Gumroads Discover"; // Set your desired website title here
  }, []);

  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Dummy search results for testing purposes
  const dummySearchResults: SearchResult[] = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' },
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);

    // Use dummy search results for testing purposes
    setSearchResults(value.trim() !== '' ? dummySearchResults : []);
  };

  const handleItemClick = (item: SearchResult) => {
    // Handle the selected item, e.g., navigate to its details page
    console.log('Selected item:', item);
  };

  const dummyCards = [
    {
      id: 1,
      imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
      description: 'Description of Product 1',
      creator: 'Creator 1',
      iconUrl: 'url_to_icon_1',
      rating: 4.5,
      price: 10.99,
      link: '/product/1', // Example link to product details page
    },
    {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Description of Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Description of Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Description of Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Description of Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Description of Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Description of Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Description of Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Description of Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Description of Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Description of Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      
    // Add more dummy cards as needed
  ];

  return (
    <main>
      <header className="hero">
        <div className='hero-content'>
          <div className='hero-actions'>
            <div className='logo-full'><img src={logo} alt="Logo"/></div>
            <div className="input-container">
              <input
                role="combobox"
                aria-expanded="false"
                aria-controls="search-results"
                type="search"
                placeholder="Search products"
                aria-autocomplete="list"
                className="input"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleInputChange}
                value={searchQuery}
              />
              <span
                className="input-icon"
                style={{ backgroundImage: `url(${searchIcon})` }}
              ></span>
              {/* Render dropdown only when input is focused and there are search results */}
              {isFocused && searchResults.length > 0 && (
                <ul id="search-results" className="search-results">
                  {searchResults.map((result) => (
                    <li key={result.id} onClick={() => handleItemClick(result)}>
                      {result.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>
      <section className="card-section">
        <h2>Recommended for you</h2>
        <Carousel>
          {dummyCards.map((card) => (
            <Card
              key={card.id}
              imageUrl={card.imageUrl}
              description={card.description}
              creator={card.creator}
              iconUrl={card.iconUrl}
              rating={card.rating}
              price={card.price}
              link={card.link}
            />
          ))}
        </Carousel>
      </section>

      <section></section>
    </main>
  );
};

export default DiscoverPage;
