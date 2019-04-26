import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './WorkItem.scss';

const WorkItem = ({ onItemClick, content }) => {
  return (
    <li className='work-list-item'
      data-event-category='work'
      data-event-action='details'
      data-event-label={`workPiece_${content.id}`}
      onClick={({ target }) => onItemClick(target)}
    >
      <div className='work-overlay'></div>
      <img src={`${process.env.PUBLIC_URL}/assets/work/${content.thumb}`} alt={content.title} />
      <div className='work-list-item-cnt'>
        <i className='work-list-item-icon'>
          <FontAwesomeIcon icon={faPlus} />
        </i>
        <h4>{content.title}</h4>
        <h5>{content.role}</h5>
      </div>
    </li>
  );
};

export default WorkItem;
