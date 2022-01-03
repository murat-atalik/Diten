import './style/index.scss';

import React from 'react';

import HomePage from './Pages/HomePage/HomePage';

const App = function () {
  // if you see underline x and you see this error ``'x' is declared but its value is never read`` eslint works fine

  return (
    <div>
      {/*  <FontAwesomeIcon icon="check-square" />
      Your <FontAwesomeIcon icon="coffee-togo" /> is hot and ready! You
      <FontAwesomeIcon icon={faAddressBook} size="6x" pull="left" /> is hot and
      ready! */}
      <HomePage />
    </div>
  );
};

export default App;
