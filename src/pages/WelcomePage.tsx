import React from 'react';

interface WelcomePageProps {
  onEnter: () => void; // Specify the type of the onEnter prop
}

function WelcomePage({ onEnter }: WelcomePageProps) {
  return (
    <div>
      <h1>Welcome to Gumroad!</h1>
      <p>By accessing this page you promise not to steal any design ideas from this creator and then not hire the creator.</p>
      <img src='https://media.tenor.com/X2-Ca110dkgAAAAF/call-me-emperor-cme.png'></img>
      <p>Click the button below to enter.</p>

      <button onClick={onEnter}>I promise</button>
    </div>
  );
}

export default WelcomePage;
