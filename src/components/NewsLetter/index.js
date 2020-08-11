import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { 
  Container, 
  InputSearch, 
  ListNews, 
  ListSujest,
  UsagePolicy
} from './styles';

const NewsLetter = () => {
  return (
    <Container>
      <InputSearch>
        <FiSearch size={20}/>
        <input 
          type="search" 
          placeholder="Buscar no Twitter"
        />
      </InputSearch>

      <ListNews>
        <li>
          <h1>O que está acontecendo</h1>
        </li>

        <li>
          <span>Covid-19 - Esta manhã</span>
          <strong>
            O que se sabe sobre a vacina russa e por que
            tem causado desconfiança
          </strong>
          <legend>
            assuntos do Momento: 
            <span> Putin</span> e <span>Russa</span>
          </legend>
        </li>

        <li>
          <span>
            Música do Brasil - Assunto do Momento
          </span>
          <strong>mc gui</strong>
          <legend>2.192 Tweets</legend>
        </li>

        <li>
          <span>
            Assuntos do Momento em Brasil
          </span>
          <strong>Monstros SA</strong>
          <legend>2.391 Tweets</legend>
        </li>

        <li>
          <span>Celebridades - Ontem</span>
          <strong>
            Marina Ruy Barbosa Resolveu colocar fim a uma
            polêmica envolvendo... BTS!
          </strong>
        </li>

        <li>
          <span>Gaming - Assunto do Momento</span>
          <strong>Diana</strong>
          <legend>47,9mil Tweets</legend>
        </li>

        <li className="more-news">
          Mostrar mais
        </li>
      </ListNews>
    
      <ListSujest>
        <li>
          <h1>Quem seguir</h1>  
        </li>

        <li>
          <div className="profile">
            <img src="#" alt=""/>
            <h2>
              Luscas  <br />
              <span>@luscas</span>
            </h2>
          </div>
          <button>Seguir</button>
        </li>

        <li>
          <div className="profile">
            <img src="#" alt=""/>
            <h2>
              Felipe Neto  <br />
              <span>@felipeneto</span>
            </h2>
          </div>
          <button>Seguir</button>
        </li>

        <li className="more-follow">
          Mostrar mais
        </li>
      </ListSujest>
    
      <UsagePolicy>
        <div className="terms">
          <a href="#">Termos</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Cookies</a>
        </div>

        <div className="informations-announcement">
          <a href="#">informações de anúncios</a>
          <a href="#">Main</a>
        </div>

       
        <p>© 2020 Twitter, Inc.</p>
      </UsagePolicy>
    </Container>
  );
}

export default NewsLetter;