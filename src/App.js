import React from 'react';
import './assets/styles/global.css';

import Menu from './components/Menu';
import NewsLetter from './components/NewsLetter';

import { Container } from './assets/styles/App.js';

const App = () => {
  return (
    <Container>
      <Menu />
      
      <NewsLetter />
    </Container>
  );
}

export default App;
