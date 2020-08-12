import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/">
          <FiHome size={25}/>
          Home
        </Link>

        <Link>
          <FiHash size={25}/>
          Explorer
        </Link>

        <Link>
          <FiBell size={25}/>
          Notifications
        </Link>

        <Link>
          <FiMail size={25}/>
          Mesages
        </Link>

        <Link>
          <FiBookmark size={25}/>
          Bookmarks
        </Link>

        <Link>
          <FiFileText size={25}/>
          Lists
        </Link>

        <Link to="/profile">
          <FiUser size={25}/>
          Profile
        </Link>

        <Link>
          <FiMoreHorizontal size={25}/>
          More
        </Link>
      </List>

      <Button>Tweet</Button>
    </Container>
  );
}

export default Menu;