import React from 'react';
import {
  faTwitter,
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import IconItem from '../IconItem';

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
        </ul>
      </div>
    </section>
  );
}

export default About;
