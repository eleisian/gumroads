import React, { useState } from 'react';

const SearchComponent: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      role="combobox"
      aria-expanded="false"
      aria-controls=":R1l:"
      type="search"
      placeholder="Search products"
      aria-autocomplete="list"
      value={searchValue}
      onChange={handleChange} // Update the value on change
    />
  );
};

export default SearchComponent;
