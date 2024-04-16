import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import DiscoverPage from './pages/DiscoverPage';

function Gumroads_App() {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <div>
      {!entered && <WelcomePage onEnter={handleEnter} />}
      {entered && <DiscoverPage />}
    </div>
  );
}

export default Gumroads_App;
