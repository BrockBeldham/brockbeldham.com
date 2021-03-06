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

import './About.scss';
import logo from '../../images/main.jpg';

const About = () => {
  return (
    <section id='about' className='container'>
      <div className='about clearfix'>
        <div className='about-left'>
          <img src={logo} alt='Brock Beldham' />
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
          <p className='accolades'>
            Father <strong>/</strong> Developer <strong>/</strong> Designer <strong>/</strong> Painter <strong>/</strong> Artist <strong>/</strong> Gamer <strong>/</strong> Hockey&nbsp;Player <strong>/</strong> Snowboarder <strong>/</strong> Cyclist <strong>/</strong> Cook <strong>/</strong> Coffee&nbsp;Drinker <strong>/</strong> Beer&nbsp;Enthusiast
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
          <p>
            The site is built using Facebook's <a href='https://facebook.github.io/create-react-app/' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Create React App'>Create React App</a>. This allows for easy deployment without the fuss of configuring various packages on such a small static web app. <a href='https://github.com/sass/node-sass' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Node Sass'>Node Sass</a> has been installed to allow styling with scss. <a href='http://backbonejs.org/#Router' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='React Router'>React Router</a> has also been installed to make the Single Page App operate as though it were a more traditional website. The icons are provided by <a href='https://fontawesome.com/' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='FontAwesome'>FontAwesome</a> and the font I use is <a href='https://fonts.google.com/specimen/Lato' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Lato'>Lato</a> provided by <a href='http://www.google.com/fonts' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Google Fonts'>Google Fonts</a>. Of course none of this would have been possible without a steady supply of <a href='https://www.elorabrewingcompany.ca/elora-borealis' target='_blank' rel='noopener noreferrer' data-event-category='about' data-event-action='bio' data-event-label='Elora Borealis Pale Ale'>Elora Borealis Pale Ale</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
