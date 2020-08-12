import React, { useState } from 'react';
import { FiSpeaker } from 'react-icons/fi';

import { 
  Container, 
  PublicTwitter, 
  HeadHome, 
  WelcomeTo 
} from './styles';
import { Link } from 'react-router-dom';

const HomeFeed = () => {
  const [publication, setPublication] = useState(false)

  return (
    <Container>
      <HeadHome>
        <h1>Home</h1>
        <FiSpeaker size={25}/>
      </HeadHome>
      
      <PublicTwitter>
        <div className="post">
          <Link to="/profile">
            <img 
              src="https://avatars1.githubusercontent.com/u/47330738?s=460&u=02d0cda3560db0a0cf54e34ca235df32c7f4531d&v=4" 
              alt=""
            />
          </Link>
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
    
      {publication === false 
        ?
          <WelcomeTo>
              <h1>Welcome to Twitter!</h1>
              <legend>
                This the best place to see what's happening in your world.
                Find some people and topcs to follow now.
              </legend>
              <button>Let's go!</button>
          </WelcomeTo>
        :
          null
      }
    </Container>
  );
}

export default HomeFeed;