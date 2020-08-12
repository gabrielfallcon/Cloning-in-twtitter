import React from 'react';
import { 
  FiHome, 
  FiHash, 
  FiBell, 
  FiMail, 
  FiBookmark, 
  FiFileText, 
  FiUser, 
  FiMoreHorizontal 
} from 'react-icons/fi';

import logoImg from '../../assets/Images/logo.png';

import { Container, List, Button } from './styles';

const Menu = () => {
  return(
    <Container>
      <img src={logoImg} alt="Twitter"/>

      <List className="menu-buttons">
        <li>
          <FiHome size={25}/>
          Home
        </li>

        <li>
          <FiHash size={25}/>
          Explorer
        </li>

        <li>
          <FiBell size={25}/>
          Notifications
        </li>

        <li>
          <FiMail size={25}/>
          Mesages
        </li>

        <li>
          <FiBookmark size={25}/>
          Bookmarks
        </li>

        <li>
          <FiFileText size={25}/>
          Lists
        </li>

        <li>
          <FiUser size={25}/>
          Profile
        </li>

        <li>
          <FiMoreHorizontal size={25}/>
          More
        </li>
      </List>

      <Button>Tweetar</Button>
    </Container>
  );
}

export default Menu;