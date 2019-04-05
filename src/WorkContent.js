import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faLink
} from '@fortawesome/free-solid-svg-icons';

const WorkContent = ({ content, onClose }) => {
  if (!content) {
    return false;
  }

  return (
    <Fragment>
      <div className='pop-close' onClick={() => { onClose() }}>
        <div className='icon-link'>
          <i className='fa fa-times'>
            <FontAwesomeIcon icon={faTimes} />
          </i>
        </div>
      </div>
      <div className='work-content clear-fix'>
        <div className='work-content-left'>
          <img src={`${process.env.PUBLIC_URL}/assets/work/${content.img}`} alt={content.title} />
        </div>
        <div className='work-content-right'>
          <h5>
            {content.link
              ? <a href={content.link}
                target='_blank'
                rel='noopener noreferrer'
                data-event-category='work'
                data-event-action='link'
                data-event-label={content.title}
              >
                {content.title}
                <i className='fa fa-link'>
                  <FontAwesomeIcon icon={faLink} />
                </i>
              </a>
              : content.title
            }
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
                  <i className='fa fa-link'>
                    <FontAwesomeIcon icon={faLink} />
                  </i>
                </a>
              </p>
            ))
          }
        </div>
      </div>
    </Fragment>
  );
};

export default WorkContent;
