import React from 'react';

import Menu from '../../components/Menu';
import NewsLetter from '../../components/NewsLetter';

import ProfileFeed from '../../components/Profile';

import { Container } from '../../assets/styles/App.js';

const ProfileUser = () => {
  return (
    <Container>
      <Menu />

      <ProfileFeed />

      <NewsLetter />
    </Container>
  );
}

export default ProfileUser;