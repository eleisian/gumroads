import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import searchIcon from '../assets/search.svg';
import './DiscoverPage.css';

interface SearchResult {
    id: number;
    name: string;
}

interface DiscoverPageProps {
    // Define props here
}

const DiscoverPage: React.FC<DiscoverPageProps> = ({ /* props */ }) => {
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

    // const fetchSearchResults = async (query: string) => {
    //     try {
    //         const response = await fetch(`/api/search?query=${query}`);
    //         if (response.ok) {
    //             const data = await response.json();
    //             setSearchResults(data.results);
    //         } else {
    //             throw new Error('Failed to fetch search results');
    //         }
    //     } catch (error) {
    //         console.error('Error fetching search results:', error);
    //     }
    // };

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
        </main>
    );
};

export default DiscoverPage;
