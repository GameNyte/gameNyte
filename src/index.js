import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.js';

const App = () => {
  return (
    <>
      <Header />
    </>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
