import React, { useEffect, useState, useRef } from 'react';
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
    document.title = "Gumroads Discover";
  }, []);

  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
    // You may add actual search logic here
    setSearchResults(value.trim() !== '' ? searchResults : []);
  };

  const handleItemClick = (item: SearchResult) => {
    console.log('Selected item:', item);
    // You may add navigation logic here
  };

  const dummyCards = [
    {
      id: 1,
      imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
      description: 'Product 1',
      creator: 'Creator 1',
      iconUrl: 'url_to_icon_1',
      rating: 4.5,
      price: 10.99,
      link: '/product/1', // Example link to product details page
    },
    {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      {
        id: 1,
        imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
        description: 'Product 1',
        creator: 'Creator 1',
        iconUrl: 'url_to_icon_1',
        rating: 4.5,
        price: 10.99,
        link: '/product/1', // Example link to product details page
      },
      
    // Add more dummy cards as needed
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <div className='menu-icon-container'>
            <button
              className="menu-icon-button"
              onClick={toggleDrawer}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <div ref={drawerRef} className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
        <button className="close-drawer-button" onClick={toggleDrawer}>
          X
        </button>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
        </ul>
      </div>

      <section>
        <h2>Recommended for you</h2>
        <div className="carousel-container">
          <Carousel>
            {dummyCards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </Carousel>
        </div>
      </section>

      <section>
        <h2>Staff picks</h2>
        <div className="carousel-container">
          <Carousel>
            {dummyCards.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </Carousel>
        </div>
      </section>

      <section></section>
    </main>
  );
};

export default DiscoverPage;
