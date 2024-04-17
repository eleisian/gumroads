import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import DiscoverPage from './pages/DiscoverPage';

function Gumroads_App() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <DiscoverPage></DiscoverPage>
  );
}

export default Gumroads_App;
