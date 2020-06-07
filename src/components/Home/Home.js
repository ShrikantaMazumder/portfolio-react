import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typical from 'react-typical';

const Home = () => {
  return (
    <main id="home">
    <h1 className="lg-heading">
      Shrikanta
      <span className="secondary-color"> Mazumder</span>
    </h1>
    <h2 className="sm-heading">
      Hi, I am {' '}
      <Typical
        steps={[
          'A Web Developer', 2000, 
          'A Programmer', 2000,
          'A Designer', 2000,
        ]}
        loop={Infinity}
        wrapper="span"
      />
    </h2>
    <div className="icons">
      <a target="_blank" href="https://twitter.com/shrikantamazum">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a target="_blank" href="https://www.facebook.com/shrikantamazumder">
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
      </a>
      <a target="_blank" href="https://www.aedin.com/in/shrikanta-mazumder/">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a target="_blank" href="https://github.com/ShrikantaMazumder">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  </main>
  );
}

export default Home;