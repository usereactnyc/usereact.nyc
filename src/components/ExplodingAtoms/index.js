import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

const ExplodingAtoms = () => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransition(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed background">
      <img
        src={logo}
        className={`react-logo transition ${transition ? 'start' : ''}`}
        alt="react logo"
      />
    </div>
  );
};
export default ExplodingAtoms;
