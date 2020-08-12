import React from 'react';
import { FiSpeaker } from 'react-icons/fi';

import { Container, PublicTwitter, HeadHome } from './styles';

const HomeFeed = () => {
  return (
    <Container>
      <HeadHome>
        <h1>Home</h1>
        <FiSpeaker size={25}/>
      </HeadHome>
      
      <PublicTwitter>
        <div className="post">
          <img 
            src="https://avatars1.githubusercontent.com/u/47330738?s=460&u=02d0cda3560db0a0cf54e34ca235df32c7f4531d&v=4" 
            alt=""
          />
          <textarea placeholder="What's happening"/>
        </div>

        <div className="actions">
          <ul>
            <li>img</li>
            <li>gif</li>
            <li>gif</li>
            <li>smile</li>
            <li>date</li>
          </ul>

          <button>Tweet</button>
        </div>
      </PublicTwitter>
    </Container>
  );
}

export default HomeFeed;