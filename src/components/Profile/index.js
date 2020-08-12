import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar } from 'react-icons/fi';

import {
  Container,
  HeadProfile,
  FeedProfile,
  InfoProfile,
  InfoNavigations,
  DontTweet
} from './styles';

const Profile = () => {
  return (
    <Container>
      <HeadProfile>
        <Link to="/">
          <FiArrowLeft size={20} />
        </Link>
        <h1>
          Gabriel Nascimento <br />
          <span>0 Tweets</span>
        </h1>
      </HeadProfile>

      <FeedProfile>
        <div className="cover">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D16AQFA3HQof2E7Fg/profile-displaybackgroundimage-shrink_200_800/0?e=1602720000&v=beta&t=SyTFPzNiUpoudc8mToTqv23M7_45iMsX_jJd2REfGSE"
            alt=""
          />
        </div>

        <InfoProfile>
          <div className="infos">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHXOlFNpC1e5g/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=G1AS4wNcqtf7gVS8qH8sSDcIoBX7HBcTsPa9rzPx7Ww"
              alt="Gabriel Nascimento"
            />

            <h1>Gabriel Nascimento</h1>

            <span>@Gabbriljs</span>

            <span><FiCalendar size={18} /> Joined January 2020</span>

            <span>
              <strong>522</strong> Following
              <strong>689</strong> Followers
            </span>
          </div>

          <button>Set up profile</button>
        </InfoProfile>
      </FeedProfile>

      <InfoNavigations>
        <li>Tweets</li>
        <li>Tweets & replies</li>
        <li>Media</li>
        <li>Likes</li>
      </InfoNavigations>

      <DontTweet>
        <h1>You haven't Tweeted yet</h1>
        <legend>
          When you post a Tweet, it’ll show up here.
        </legend>
        <button>Tweet now</button>
      </DontTweet>
    </Container>
  );
}

export default Profile;