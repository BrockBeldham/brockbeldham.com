import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

import WorkItem from './WorkItem';
import WorkContent from './WorkContent';
import './Work.scss';

class Work extends Component {
  constructor (props) {
    super(props);
    this.state = {
      work: [
        {
          id : 'Union',
          img : 'work-unn-content.png',
          thumb : 'work-unn-thumb.png',
          title : 'Union',
          client : 'Union Creative',
          role : 'Lead Front-End Developer',
          platform : 'Website',
          link : 'http://www.unioncreative.ca',
          summary : [
            'As part of being the Lead Front-End at Union Creative, I was part of the team that redesigned Union\'s corporate website. Union Creative strived to be an innovative integrated advertising agency and a Wordpress site with a boring design just wouldn\'t cut it.',
            'With the previous site in Wordpress, very few people updated it and the content got stale. So keeping the content on the new site \'fresh\' was the major challenge. The new site would be based around social feeds. A Django Backend would use Twitter and Instagram\'s APIs to pull in social feeds and store tweets and photos in the CMS. The Front-End would get a JSON response from the Backend that would be the basis for the Model in a Backbone app. From there the content was fit into a side scrolling grid pattern with various layout templates chosen by the CMS. Anyone at Union could contribute content to the new website to keep it \'fresh\'. an Innovative solution for an Integrated industry.'
          ],
          sources : [
            {
              link : 'http://www.adweek.com/news/advertising-branding/ad-day-amazing-new-gadget-quitbit-tells-you-exactly-when-youll-die-166775',
              label : 'Adweek'
            },
            {
              link : 'http://www.theglobeandmail.com/report-on-business/industry-news/marketing/quitbit-funeral-home-group-hopes-humorous-ad-will-get-you-thinking-about-death/article26265568/',
              label : 'The Globe and Mail'
            },
            {
              link : 'http://www.brandchannel.com/2015/09/10/quitbit-091015/',
              label : 'Brand Channel'
            }
          ]
        },
        {
          id : 'NotYet',
          img : 'work-mpg-content.png',
          thumb : 'work-mpg-thumb.png',
          title : 'Not-Yet.ca',
          client : 'Mount Pleasant Group',
          role : 'Lead Front-End Developer',
          platform : 'Website',
          link : 'http://www.not-yet.ca',
          summary : [
            'For Mount Pleasant\'s 2016 campaign was not-yet.ca. The campaign was a fully integrated campaign with 30 second video spots pushing to the not-yet.ca website. The idea was a user would arrive at the site and get completely overwhelmed with statistics about death. So overwhelmed that they would want help.',
            'The timeline for this project was quite tight and even though I wasn\'t offered too much time, I was able to fit in quite a few nice css transitions and animations. I\'m quite proud of the animation I was able to pull off with the form. The placeholder text appears to transition into a label for each input field. Also, animating the coloured backgrounds was a simple yet effective solution to immitate the animation style in the videos.'
          ]
        },
        {
          id : 'Quitbit',
          img : 'work-qbt-content.png',
          thumb : 'work-qbt-thumb.png',
          title : 'Quitbit',
          client : 'Mount Pleasant Group',
          role : 'Developer',
          platform : 'Microsite',
          link : 'http://www.quitbit.ca',
          summary : [
            'A marketing campaign was created for Mount Pleasant Group with the overall goal of raising awareness about funeral pre-planning and driving traffic to their site. Union Creative created a commercial for a fake smart whatch which could predict your death. Users would go to the microsite and, thinking they we\'re going to pre-order the tech, we\'re eventually directed to artofsayinggoodbye.com.',
            'Although the technologies in the project we\'re nothing special, the overall reception of the campaign was overwhelming. The campaign was featured in both Adweek and The Globe and Mail. The Youtube video now has 200, 000+ views and we had a 50% increase in sign ups compared to last year in the first week of the quitbit campaign alone.'
          ],
          sources : [
            {
              link : 'https://www.youtube.com/watch?v=JTtlkdKyOWc',
              label : 'Youtube Spot'
            },
            {
              link : 'http://www.adweek.com/news/advertising-branding/ad-day-amazing-new-gadget-quitbit-tells-you-exactly-when-youll-die-166775',
              label : 'Adweek'
            },
            {
              link : 'http://www.theglobeandmail.com/report-on-business/industry-news/marketing/quitbit-funeral-home-group-hopes-humorous-ad-will-get-you-thinking-about-death/article26265568/',
              label : 'The Globe and Mail'
            },
            {
              link : 'http://www.brandchannel.com/2015/09/10/quitbit-091015/',
              label : 'Brand Channel'
            }
          ]
        },
        {
          id : 'kraftProjectPlay',
          img : 'work-kpp-content.png',
          thumb : 'work-kpp-thumb.png',
          title : 'Kraft Heinz Project Play 2016',
          client : 'Kraft Canada',
          role : 'Developer',
          platform : 'Web Contest',
          link : 'http://www.kraftheinzprojectplay.ca',
          summary : [
            'Kraft Heinz Project Play was an evolution of the popular Kraft Celebration Tour. In the contest people from across Canada nominate their communities for a chance to win upgrades to their local community sport related facility. The contest runs in phases. First, a community member fills out a form in order to nominate thier community. Next the community rallies around their nomination through social media with the use of a custom hashtag. Next, Kraft chooses their top 4 best nominations. Finally, we entered the voting phase where the communities can vote for themselves an infinite amount of times. This was the most intense phase as we had around 100,000 hits to the site per day. The winner of the contest wins $250,000 towards their community project and TSN broadcasts an NHL game from their home town.',
            'Kraft Heinz Project Play was based on the Kraft Hockeyville framework so it shared many of the same aspects and challenges as Kraft Hockeyville. The site was responsive of course, but majority of the content was user driven. We as developers had to account for all possible image sizes, users could upload youtube videos of their communities and many other things. Also, with each phase change the content on the site and design of the site changed. This was acheived with an extensive Django backend that swapped out templates based on a timeline. In order to keep voting smooth and avoid hits bringing the site down, the voting process was all ajax. This allowed us to have users vote infinitely without having a page reload everytime.'
          ]
        },
        {
          id : 'MeadJohnson',
          img : 'work-mjn-content.png',
          thumb : 'work-mjn-thumb.png',
          title : 'Mead Johnson Corporate Site',
          client : 'Mead Johnson',
          role : 'Developer',
          platform : 'Website',
          link : 'http://www.meadjohnson.com',
          summary : [
            'Mead Johnson came to Trapeze looking for a change in their corporate website. They weren\'t looking for a change in branding, or even changes in their websites design and structure. What they needed was an update in their technologies. This included an updated CMS, a responsive designed website and modules that run without a flash dependency.',
            'As a developer on this project I quickly learned the ins and outs of the Drupal CMS. There were some things we weren\'t able to do from their old site due to Drupal\'s limitations. Overall, the responsive design worked perfectly and most Flash modules were able to be converted into an HTML/CSS/JS solution.'
          ]
        },
        {
          id : 'kraftHockeyville',
          img : 'work-khv-content.png',
          thumb : 'work-khv-thumb.png',
          title : 'Kraft Hockeyville 2016',
          client : 'Kraft Canada',
          role : 'Developer',
          platform : 'Web Contest',
          link : 'http://www.khv2016.ca',
          summary : [
            'Kraft has been running the Kraft Hockeyville program for almost a decade. In the contest people from across Canada nominate their communities for a chance to win upgrades to their local hockey arena. The contest runs in phases. First, a community member fills out a form in order to nominate thier community. Next the community rallies around their nomination through social media with the use of a custom hashtag. Next, Kraft chooses their top 10 best nominations. Then, we entered the voting phase where the communities can vote for themselves an infinite amount of times. This was the most intense phase as we had around 100,000 hits to the site per day. Finally, there is a second round of voting between the top 2 where the winner wins $100,000 and an NHL pre-season game played in their community.',
            'Kraft Hockeyville was based on the Kraft Celebration Tour framework so it shared many of the same aspects and challenges as Kraft Project Play. The site was responsive of course, but majority of the content was user driven. We as developers had to account for all possible image sizes, users could upload youtube videos of their communities and many other things. Also, with each phase change the content on the site and design of the site changed. This was acheived with an extensive Django backend that swapped out templates based on a timeline. In order to keep voting smooth and avoid hits bringing the site down, the voting process was all ajax. This allowed us to have users vote infinitely without having a page reload everytime.'
          ]
        },
        {
          id : 'buildForce',
          img : 'work-bdf-content.png',
          thumb : 'work-bdf-thumb.png',
          title : 'Build Force',
          client : 'Build Force',
          role : 'Designer/Developer',
          platform : 'Web App',
          link : null,
          summary : [
            'Build Force came to EdCetra Training in search of a new e-learning course. Their business had gone through a rebranding and their flash based e-learning course was out of date. Build Force wanted a new e-learning course that was redesigned to suit their brand and also had their previous flash modules translated to html/css/js based responsive design.',
            'Because EdCetra was such a small business, I was in charge a both design and development of the project. I used their brand colours for most of the UI with elements of blueprints and construction. As a developer there wasn\'t a flash module I couldn\'t transfer to \'flashless\'.'
          ]
        },
        {
          id : 'solarSystem',
          img : 'work-sol-content.png',
          thumb : 'work-sol-thumb.png',
          title : 'Three.js Solar System',
          client : 'Personal',
          role : 'Creator',
          platform : 'Web App',
          link : 'http://brockbeldham.github.io/threejs-solar-system-experiment/',
          summary : [
            'I was always interested in what three.js had to offer. I had known about it and admired what it could do since it\'s inception in 2009. However I never had the proper understanding of javascript in order to build something with it.',
            'Five years later, with a lot more javascript experience, I had decided to give Three.js another go. I had seen an experiment online with a model of the milky way galaxy, so I decided to create my own model of the Solar System as a personal experiment. The size of the planets and The Sun are to scale. The distance between the planets are a quarter scale. This project to me personally was very satisfying as it showed me how much my skills have improved in five years.'
          ]
        },
        {
          id : 'slideJar',
          img : 'work-sj-content.png',
          thumb : 'work-sj-thumb.png',
          title : 'Slide Jar Logo',
          client : 'SlideJar',
          role : 'Designer',
          platform : 'Branding',
          link : null,
          summary : [
            'SlideJar was a WebApp built on the Anancloud Framework. Same idea of serching through presentations and splicing slides together to make a new presentation. However, this time with a more social presence.',
            'The idea was that your personal cloud storage was a \'jar\' with slides in it. You could then search other \'jars\' for slides. I chose a jar for obvious reasons, but I wanted a simple jar that was unique enough that it could be easily identified right away based on it\'s shape alone like most othother social medias services ie. Facebook, Twitter, Google, Youtube etc. I then put slide on the jar to accentuate the idea of the jar being storage for your slides.',
            'The colour of orange was chosen because of it\'s close association to other presentation software ie. Microsoft Powerpoint and Google Slides. In order to not get lost amongst these secondary competitors I went with a complimentary blue as the primary colour.'
          ]
        }
      ],
      activeWork: null
    }

    this.popRef = React.createRef();
  };

  workItemClick (target, index) {
    this.setState({ activeWork: this.state.work[index]}, () => {
      window.scrollTo({
        top: this.popRef.current.offsetParent.offsetTop + 50,
        left: 0,
        behavior: 'smooth'
      });
    });
  };

  render () {
    return (
      <section id='work' className='container'>
        <div className='work'>
          <h3>Here are some things I'm proud to have been a part of:</h3>
          {this.state.activeWork &&
            <FadeIn>
              <div className='pop pop-open' ref={this.popRef}>
                <div className='pop-content'>
                  <WorkContent content={this.state.activeWork} onClose={() => this.setState({ activeWork: null })} />
                </div>
              </div>
            </FadeIn>
          }
          <ul className='work-list'>
            {this.state.work.map((piece, index) => (
              <WorkItem
                content={piece}
                onItemClick={(target) => this.workItemClick(target, index)}
                key={index}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  };
};

export default Work;
