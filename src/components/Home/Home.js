import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main id="home">
    <h1 class="lg-heading">
      Shrikanta
      <span class="secondary-color">Mazumder</span>
    </h1>
    <h2 class="sm-heading">
      Hi, I Am 
      <a href="#" class="typewrite" data-period="2000" data-type='[ "Web Developer.", "Programmer.", "A Designer" ]'>
        <span class="wrap"></span>
      </a>
    </h2>
    <div class="icons">
      <a target="_blank" href="https://twitter.com/shrikantamazum">
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a target="_blank" href="https://www.facebook.com/shrikantamazumder">
        <i class="fab fa-facebook fa-2x"></i>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/shrikanta-mazumder/">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a target="_blank" href="https://github.com/ShrikantaMazumder">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div>
  </main>
  );
}

export default Home;