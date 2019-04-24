import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import './Contact.scss';

const About = () => {
  return (
    <section id='contact' className='container'>
      <div className='contact'>
        <h3>Let's make something awesome</h3>
        <hr/>
        <a href='mailto:brockbeldham@gmail.com'
          target='_black'
          className='mail'
          data-event-category='contact'
          data-event-action='contacts'
          data-event-label='email'
        >
          brock.beldham@gmail.com
        </a>
        <ul className='icon-list'>
          <li className='icon-list-item'>
            <a href='https://twitter.com/BrockBeldham'
              target='_blank'
              rel='noopener noreferrer'
              className='icon-link'
              data-event-category='contact'
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
              data-event-category='contact'
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
              data-event-category='contact'
              data-event-action='contacts'
              data-event-label='linkedin'
            >
              <i className='fa'>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
