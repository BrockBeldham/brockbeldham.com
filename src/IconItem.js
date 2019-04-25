import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconItem = ({ href, evCat, evAct, evLab , icon, newWindow, download }) => {
  let newWindowProps = {};
  if (newWindow) {
    newWindowProps.target = '_blank';
    newWindowProps.rel = 'noopener noreferrer';
  }

  return (
    <li className='icon-list-item'>
      <a href={href}
        {...newWindowProps}
        download
        className='icon-link'
        data-event-category={evCat}
        data-event-actionev={evAct}
        data-event-label={evLab}
      >
        <i className='fa'>
          <FontAwesomeIcon icon={icon} />
        </i>
      </a>
    </li>
  );
};

export default IconItem;
