import React from 'react';
import {
  faEnvelope,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import IconItem from '../IconItem';

import './Home.scss';

const Home = () => {
  return (
    <section id='home' className='container'>
      <div className='home'>
        <h2>Hi, my name is Brock. I like to make <strong>innovative</strong>, <strong>engaging</strong>, <strong>and awesome</strong> web applications. Check out my work and let's start something awesome.</h2>
        <ul className='icon-list'>
          <IconItem
            href='mailto:brockbeldham@gmail.com'
            evCat='about'
            evAct='contacts'
            evLab='email'
            icon={faEnvelope}
            newWindow
            download={false}
          />
          <IconItem
            href='https://twitter.com/BrockBeldham'
            evCat='about'
            evAct='contacts'
            evLab='twitter'
            icon={faTwitter}
            newWindow
            download={false}
          />
          <IconItem
            href='https://github.com/BrockBeldham'
            evCat='about'
            evAct='contacts'
            evLab='github'
            icon={faGithub}
            newWindow
            download={false}
          />
          <IconItem
            href='https://www.linkedin.com/profile/view?id=98919640'
            evCat='about'
            evAct='contacts'
            evLab='linkedin'
            icon={faLinkedinIn}
            newWindow
            download={false}
          />
          <IconItem
            href={`${process.env.PUBLIC_URL}/assets/resume.pdf`}
            evCat='about'
            evAct='contacts'
            evLab='resume'
            icon={faFileAlt}
            newWindow
            download
          />
        </ul>
      </div>
    </section>
  );
}

export default Home;
