import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import './Home.scss';

const Home = () => {
  return (
    <section id='home' className='container'>
      <div className='home'>
        <h2>Hi, my name is Brock. I like to make <strong>innovative</strong>, <strong>engaging</strong>, <strong>and awesome</strong> web applications. Check out my work and let's start something awesome.</h2>
        <ul className='icon-list'>
          <li className='icon-list-item'>
            <a href='mailto:brockbeldham@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              data-event-category='home'
              data-event-action='contacts'
              data-event-label='email'
            >
              <i className='fa'>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
            </a>
          </li>
          <li className='icon-list-item'>
            <a href='https://twitter.com/BrockBeldham'
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              data-event-category='home'
              data-event-action='contacts'
              data-event-label='twitter'
            >
              <i className='fa'>
                <FontAwesomeIcon icon={faTwitter} />
              </i>
            </a>
          </li>
          <li className='icon-list-item'>
            <a href='https://github.com/BrockBeldham'
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              data-event-category='home'
              data-event-action='contacts'
              data-event-label='github'
            >
              <i className='fa'>
                <FontAwesomeIcon icon={faGithub} />
              </i>
            </a>
          </li>
          <li className='icon-list-item'>
            <a href='https://www.linkedin.com/profile/view?id=98919640'
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              data-event-category='home'
              data-event-action='contacts'
              data-event-label='linkedin'
            >
              <i className='fa'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </i>
            </a>
          </li>
          <li className='icon-list-item'>
            <a href='static/docs/resume.pdf'
              target='_blank'
              download
              className='icon-link'
              data-event-category='home'
              data-event-action='contacts'
              data-event-label='resume'
            >
              <i className='fa'>
                <FontAwesomeIcon icon={faFileAlt} />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
