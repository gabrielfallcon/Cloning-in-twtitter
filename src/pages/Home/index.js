import React from 'react';

import Menu from '../../components/Menu';
import NewsLetter from '../../components/NewsLetter';

import HomeFeed from '../../components/HomeFeed';

import { Container } from '../../assets/styles/App.js';

const Home = () => {
  return (
    <Container>
      <Menu />

      <HomeFeed />

      <NewsLetter />
    </Container>
  );
}

export default Home;