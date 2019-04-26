import React from 'react';

import './Header.scss';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className='hdr'>
      <div className='logo'>
        <a href='/'
          className='logo-link icon-link'
          data-nav-link
          data-event-category='header'
          data-event-action='logo'
          data-event-label='click'
        >
          <img src={logo} className='logo-image' alt='Brock Beldham Logo' />
        </a>
        <ul className='logo-details'>
          <li
            data-event-category='header'
            data-event-action='title'
            data-event-label='click'
          >
            <h1>
              <a href='/' className='icon-link' data-nav-link>Brock Beldham</a>
            </h1>
          </li>
          <li
            data-event-category='header'
            data-event-action='subtitle'
            data-event-label='click'
          >
            <h4>
              <a href='/' className='icon-link' data-nav-link>Interactive Designer</a>
            </h4>
          </li>
        </ul>
      </div>
      <nav className='nav'>
        <ul>
          <li className='nav-list-item'>
            <a href='/work'
              className='nav-link'
              data-nav-link
              data-event-category='header'
              data-event-action='nav'
              data-event-label='work'
            >
              Work
            </a>
          </li>
          <li className='nav-list-item'>
            <a href='/about'
              className='nav-link'
              data-nav-link
              data-event-category='header'
              data-event-action='nav'
              data-event-label='about'
            >
              About
            </a>
          </li>
          <li className='nav-list-item'>
            <a href='/contact'
              className='nav-link'
              data-nav-link
              data-event-category='header'
              data-event-action='nav'
              data-event-label='contact'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
