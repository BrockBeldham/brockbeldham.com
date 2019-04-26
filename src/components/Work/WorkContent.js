import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import './WorkContent.scss';

const WorkContent = ({ content, onClose }) => {
  if (!content) {
    return false;
  }

  return (
    <div className='work-content clear-fix'>
      <div className='work-content-left'>
        <img src={`${process.env.PUBLIC_URL}/assets/work/${content.img}`} alt={content.title} />
      </div>
      <div className='work-content-right'>
        <h5>
          {content.link ? (
            <a href={content.link}
              target='_blank'
              rel='noopener noreferrer'
              data-event-category='work'
              data-event-action='link'
              data-event-label={content.title}
            >
              {content.title}
              <i className='work-content-link-icon'>
                <FontAwesomeIcon icon={faLink} />
              </i>
            </a>
          ) : (
            content.title
          )}
        </h5>
        <p><em>Client:</em> {content.client}</p>
        <p><em>Role:</em> {content.role}</p>
        <p><em>Platform:</em> {content.platform}</p>
        {content.summary.map((sum, index) => (
          <p key={index}>{sum}</p>
        ))}
        {typeof content.sources !== 'undefined' &&
          content.sources.map((source, index) => (
            <p key={index}>
              <a href={source.link} target='_blank' rel='noopener noreferrer'>
                {source.label}
                <i className='work-content-link-icon'>
                  <FontAwesomeIcon icon={faLink} />
                </i>
              </a>
            </p>
          ))
        }
      </div>
    </div>
  );
};

export default WorkContent;
