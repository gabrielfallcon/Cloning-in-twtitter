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
          Página Inicial
        </li>

        <li>
          <FiHash size={25}/>
          Explorar
        </li>

        <li>
          <FiBell size={25}/>
          Notificações
        </li>

        <li>
          <FiMail size={25}/>
          Mensagens
        </li>

        <li>
          <FiBookmark size={25}/>
          Itens salvos
        </li>

        <li>
          <FiFileText size={25}/>
          Listas
        </li>

        <li>
          <FiUser size={25}/>
          Perfil
        </li>

        <li>
          <FiMoreHorizontal size={25}/>
          Mais
        </li>
      </List>

      <Button>Tweetar</Button>
    </Container>
  );
}

export default Menu;