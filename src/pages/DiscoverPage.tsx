import React, { useEffect, useState, useRef } from 'react';
import searchIcon from '../assets/search.svg';
import './DiscoverPage.css';
import Carousel from '../components/carousel';
import Card from '../components/card';
import SearchComponent from '../components/search';

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

  const dummyCards = [
    {
      id: 1,
      imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
      description: 'Product 1\n\n\n',
      creator: 'Creator 1',
      iconUrl: 'url_to_icon_1',
      rating: 4.5,
      price: 10.99,
      link: '/product/1', // Example link to product details page
    },
    {
      id: 2,
      imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
      description: 'Product 1\n\n\n',
      creator: 'Creator 1',
      iconUrl: 'url_to_icon_1',
      rating: 4.5,
      price: 10.99,
      link: '/product/1', // Example link to product details page
    },
    {
      id: 3,
      imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
      description: 'Product 1\n\n\n',
      creator: 'Creator 1',
      iconUrl: 'url_to_icon_1',
      rating: 4.5,
      price: 10.99,
      link: '/product/1', // Example link to product details page
    },
    {
      id: 4,
      imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
      description: 'Product 1\n\n\n',
      creator: 'Creator 1',
      iconUrl: 'url_to_icon_1',
      rating: 4.5,
      price: 10.99,
      link: '/product/1', // Example link to product details page
    },
    {
      id: 5,
      imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
      description: 'Product 1\n\n\n',
      creator: 'Creator 1',
      iconUrl: 'url_to_icon_1',
      rating: 4.5,
      price: 10.99,
      link: '/product/1', // Example link to product details page
    },
    {
      id: 6,
      imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
      description: 'Product 1\n\n\n',
      creator: 'Creator 1',
      iconUrl: 'url_to_icon_1',
      rating: 4.5,
      price: 10.99,
      link: '/product/1', // Example link to product details page
    },
    {
      id: 7,
      imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
      description: 'Product 1\n\n\n',
      creator: 'Creator 1',
      iconUrl: 'url_to_icon_1',
      rating: 4.5,
      price: 10.99,
      link: '/product/1', // Example link to product details page
    },
    {
      id: 8,
      imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
      description: 'Product 1\n\n\n',
      creator: 'Creator 1',
      iconUrl: 'url_to_icon_1',
      rating: 4.5,
      price: 10.99,
      link: '/product/1', // Example link to product details page
    },
    {
      id: 9,
      imageUrl: 'https://public-files.gumroad.com/2f3fp3v7aqrzh8lutbzr9k0kwha9',
      description: 'Product 1\n\n\n',
      creator: 'Creator 1',
      iconUrl: 'url_to_icon_1',
      rating: 4.5,
      price: 10.99,
      link: '/product/1', // Example link to product details page
    },
    // Add more dummy cards as needed
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);

    // Dummy search results based on the input value
    const dummyResults: SearchResult[] = [
      { id: 1, name: 'Result 1' },
      { id: 2, name: 'Result 2' },
      { id: 3, name: 'Result 3' },
      // Add more dummy results as needed
    ];

    // Set the search results based on the input value
    setSearchResults(value.trim() !== '' ? dummyResults : []);
  };

  const handleItemClick = (item: SearchResult) => {
    console.log('Selected item:', item);
    // You may add navigation logic here
  };

  const handleMouseEnter = () => {
    setIsFocused(true);
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
  };

  return (
    <body>
      <div id='root'>
        <div>
          <body id='discover-page'>
            <main style={{ minHeight: '100vh', display: 'grid', gridTemplateRows: 'auto 1fr auto' }}>
              <header className='hero'>
                <div className='hero-actions'>
                  <a className="logo" href="/"><div className="logo-full">&nbsp;</div>
                  </a>
                  <div className="separator"></div>
                  <div className="combobox" style={{flexGrow:'1'}}>
                    <div className="input">
                      <span className="icon icon-solid-search"></span>
                      <SearchComponent></SearchComponent>
                    </div>
                    {/* <div hidden><datalist id=":R1l:"></datalist></div> */}
                  </div>
                  <div role='nav'>
                    <div className='nested-menu'>
                      <div role='menubar' aria-busy='false'>
                        <div>
                          <a href="/" className={`pill button ${isFocused ? 'focused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role="menuitem" aria-current={isFocused ? 'true' : 'false'}>All</a>
                        </div>
                        <div className='popover'>
                          <a href="/3d" className={`pill button ${isFocused ? 'focused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role="menuitem" aria-current={isFocused ? 'true' : 'false'} aria-haspopup="true" aria-expanded="false" aria-controls=":r3j:">3D</a>
                        </div>
                        <div className='popover'>
                          <a href="/3d" className={`pill button ${isFocused ? 'focused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role="menuitem" aria-current={isFocused ? 'true' : 'false'} aria-haspopup="true" aria-expanded="false" aria-controls=":r3j:">Audio</a>
                        </div>
                        <div className='popover'>
                          <a href="/3d" className={`pill button ${isFocused ? 'focused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role="menuitem" aria-current={isFocused ? 'true' : 'false'} aria-haspopup="true" aria-expanded="false" aria-controls=":r3j:">Business & Money</a>
                        </div>
                        <div className='popover'>
                          <a href="/3d" className={`pill button ${isFocused ? 'focused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role="menuitem" aria-current={isFocused ? 'true' : 'false'} aria-haspopup="true" aria-expanded="false" aria-controls=":r3j:">Comics & Graphic Novels</a>
                        </div>
                        <div className='popover'>
                          <a href="/3d" className={`pill button ${isFocused ? 'focused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role="menuitem" aria-current={isFocused ? 'true' : 'false'} aria-haspopup="true" aria-expanded="false" aria-controls=":r3j:">Design</a>
                        </div>
                        <div className='popover'>
                          <a href="/3d" className={`pill button ${isFocused ? 'focused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role="menuitem" aria-current={isFocused ? 'true' : 'false'} aria-haspopup="true" aria-expanded="false" aria-controls=":r3j:">Drawing & Painting</a>
                        </div>
                        <div className='popover'>
                          <a href="/3d" className={`pill button ${isFocused ? 'focused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role="menuitem" aria-current={isFocused ? 'true' : 'false'} aria-haspopup="true" aria-expanded="false" aria-controls=":r3j:">Education</a>
                        </div>
                        <div className='popover'>
                          <a href="/3d" className={`pill button ${isFocused ? 'focused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role="menuitem" aria-current={isFocused ? 'true' : 'false'} aria-haspopup="true" aria-expanded="false" aria-controls=":r3j:">Fiction Books</a>
                        </div>
                        <div className='popover'>
                          <a href="/3d" className={`pill button ${isFocused ? 'focused' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role="menuitem" aria-current={isFocused ? 'true' : 'false'} aria-haspopup="true" aria-expanded="false" aria-controls=":r3j:">Films</a>
                        </div>
                        <div>
                        <a href="#" className="pill button expandable" role="menuitem" aria-current="false" aria-haspopup="true" aria-expanded="false" aria-controls=":rac:" aria-label="More Categories">More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
    
              <div style={{ display: 'grid', gap: 'var(--spacer-6)' }}>
                <div className='paragraphs'>
                  <h2>Staff picks</h2>
                  <div className='product-card-grid narrow'>
                    {dummyCards.map((card) => (
                      <Card key={card.id} {...card} />
                    ))}

                  </div>
                </div>
              </div>
            </main>
          </body>
        </div>
      </div>
    </body>
  );
};

export default DiscoverPage;
