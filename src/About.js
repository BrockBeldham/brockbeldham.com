import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithub,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import './About.scss';
import logo from './images/main.jpg';

const About = () => {
  return (
    <section id='about' className='container'>
      <div className='about clearfix'>
        <div className='about-left'>
          <img src={logo} alt='Brock Beldham' />
          <ul className='icon-list'>
            <li className='icon-list-item'>
              <a href='mailto:brockbeldham@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                className='icon-link'
                data-event-category='about'
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
                data-event-category='about'
                data-event-action='contacts'
                data-event-label='twitter'
              >
                <i className='fa fa-twitter'>
                  <FontAwesomeIcon icon={faTwitter} />
                </i>
              </a>
            </li>
            <li className='icon-list-item'>
              <a href='https://github.com/BrockBeldham'
                target='_blank'
                rel='noopener noreferrer'
                className='icon-link'
                data-event-category='about'
                data-event-action='contacts'
                data-event-label='github'
              >
                <i className='fa fa-github'>
                  <FontAwesomeIcon icon={faGithub} />
                </i>
              </a>
            </li>
            <li className='icon-list-item'>
              <a href='https://www.linkedin.com/profile/view?id=98919640'
                target='_blank'
                rel='noopener noreferrer'
                className='icon-link'
                data-event-category='about'
                data-event-action='contacts'
                data-event-label='linkedin'
              >
                <i className='fa fa-linkedin'>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </i>
              </a>
            </li>
            <li className='icon-list-item'>
              <a href={`${process.env.PUBLIC_URL}/assets/resume.pdf`}
                target='_blank'
                rel='noopener noreferrer'
                download
                className='icon-link'
                data-event-category='about'
                data-event-action='contacts'
                data-event-label='resume'
              >
                <i className='fa fa-file-text'>
                  <FontAwesomeIcon icon={faFileAlt} />
                </i>
              </a>
            </li>
          </ul>
          <p className='accolades'>
            Developer <strong>/</strong>
            Designer <strong>/</strong>
            Painter <strong>/</strong>
            Artist <strong>/</strong>
            Gamer <strong>/</strong>
            Hockey&nbsp;Player <strong>/</strong>
            Snowboarder <strong>/</strong>
            Cyclist <strong>/</strong>
            Cook <strong>/</strong>
            Coffee&nbsp;Drinker <strong>/</strong>
            Beer&nbsp;Enthusiast
          </p>
        </div>
        <div className='about-right'>
          <h5>My <strong>Education</strong></h5>
          <p>Near the end of the summer of 2007, with Art and Design heavy on my mind, I attended Sheridan College's <a href='https://www.sheridancollege.ca/academics/programs-and-courses/visual-and-creative-arts.aspx' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Visual and Creative Arts Advanced'>Visual and Creative Arts Advanced</a> program. This was a fantastic experience which really helped me express myself, but I soon found myself drifting towards design and more specifically towards Web Design. Along with learning how to design for web, I really wanted to gain a better understanding of how to actually develop websites and applications.</p>
          <p>Upon graduating Visual and Creative Arts, I then attended Sheridan College's <a href='https://www.sheridancollege.ca/academics/programs-and-courses/interactive-media-management.aspx' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Interactive Multimedia'>Interactive Multimedia</a>. Although IMM was a one year certificate program, it was quite intensive. I went from little understanding of any programming language to basic knowledge of PHP, SQL and Action Script and extensive knowledge in front-end languages like HTML, CSS and Javasript. 12-14 hour school days along with some work placement projects really gave me a taste for what I needed to take on the Web Development world.</p>
          <hr/>
          <h5>My <strong>Experience</strong></h5>
          <p>Soon after finishing Interactive Multimedia, I did some freelance work and managed to get a job at Edcetra Training, a small elearning agency in Toronto. Even though I was hired as a Jr. Flash Developer the market was rapidly changing and many cleints required elearning to be available on mobile devices. I also used my graphic training from school to inherit the Creative Director job. I quickly adapted and started converting Flash based modules into Javascript applications along with designing many of the new projects. What I had learned from this 'Jr. Flash Developer' position proved invaluable.</p>
          <p>In the summer of 2013 <a href='http://www.trapeze.com/about-us/' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Trapeze Media'>Trapeze Media</a> added me to their roster. I helped build beautfiul corporate sites like <a href='http://www.meadjohnson.com' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Mead Johnson'>Mead Johnson</a>, but also helped with small contests, brand promotions and even being asked to be the Lead Developer on some projects. In the summer of 2014 the agency <a href='http://www.unioncreative.com/' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Union Creative'>Union Creative</a> aquired Trapeze Media. I was asked to be a part of the Innovation Team to create innovative ad campaigns with the newest technologies. Through Trapeze and by extension Union's workflows I have evolved from a Jr. Front-End Developer into an Advanced Front-End Developer capable of being a Lead Developer on any project.</p>
          <hr/>
          <h5>This <strong>Site</strong></h5>
          <p>This site was designed and built from the ground up and is, of course, 100% responsive. I use <a href='http://gruntjs.com/' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Grunt'>Grunt</a> to perform my front-end tasks: compiling <a href='http://lesscss.org/' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='LESS'>LESS</a>, cleaning code, js hinting and minifying css and js. The icons are provided by <a href='http://fortawesome.github.io/Font-Awesome/' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='FontAwesome'>FontAwesome</a> and the font I use is Lato provided by <a href='http://www.google.com/fonts' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Google Fonts'>Google Fonts</a>.</p>
          <p>The site is built with a <a href='http://backbonejs.org/#Router' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Backbone Router'>Backbone Router</a>. This allows for page navigation without a hard reload, which in turn allows for animated page transitions. The transitions are done using the lightweight animation library <a href='http://julian.com/research/velocity/' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Velocity.js'>Velocity.js</a>. I keep all the work page's content in a json file which I then loop into an <a href='http://underscorejs.org/' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Underscore'>Underscore</a> template. This makes managing the content easier without having to edit code and I also don't have to configure a CMS. Of course none of this would have been possible without a steady supply of <a href='http://www.amsterdambeer.com/beers/amsterdam-downtown-brown/' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Amsterdam Downtown Brown Ale'>Amsterdam Downtown Brown Ale</a></p>
        </div>
      </div>
    </section>
  );
}

export default About;
