import React from 'react';
import styles from 'pages/Projects/Projects.module.scss';
import Menu from 'components/Menu/Menu';
import Project from 'components/Project/Project';
import portfolio from 'assets/Projects/portfolio.png';
import activebox from 'assets/Projects/ActiveBox.png';
// import restauratorium from 'assets/Projects/restauratorium.jpg';
import enyo from 'assets/Projects/enyo.jpg';
import foodmonkey from 'assets/Projects/foodmonkey.jpg';
import gallery from 'assets/Projects/Gallery-api.jpg';

const navLinks = [
  { name: 'home', to: '/' },
  { name: 'about me', to: '/about' },
  { name: 'skills', to: '/skills' },
  { name: 'contact', to: '/contact' },
];

const projectsItems = [
  {
    index: 1,
    name: 'Portfolio',
    description: 'My portfolio and first experience with React Router, and React Hooks. Hope you like it.',
    img: portfolio,
    technologies: ['Html', 'Css', 'Javascript', 'React', 'Css Modules', 'Eslint', 'AdobeXD'],
    githubLink: 'https://github.com/mateuszwawrzonkowski/Portfolio',
    pageLink: 'https://mateuszwawrzonkowski.github.io/Portfolio/#/',
  },
  {
    index: 2,
    name: 'Active Box',
    description: 'Created on the basis of Kamal Chaneman design. Programmed 100% by me. Created for learning purpose.',
    img: activebox,
    technologies: ['Html', 'Css', 'Javascript', 'jQuery'],
    githubLink: 'https://github.com/mateuszwawrzonkowski/One_page_site',
    pageLink: 'https://mateuszwawrzonkowski.github.io/One_page_site/',
  },
  {
    index: 3,
    name: 'Foodmonkey',
    description: 'Only for mobile phones. The application allows to check nearest restaurants in your city. If you are signed up and logged in you can rate restaurants. For develop you can check two cities: Warszawa and Wrocław',
    img: foodmonkey,
    technologies: ['Html', 'Css', 'Javascript', 'React', 'React Redux', 'Firebase', 'Styled Componenets'],
    // githubLink: 'https://github.com/mateuszwawrzonkowski/Restauratorium',
    pageLink: 'https://foodmonkey.netlify.app/',
  },
  // {
  //   index: 3,
  //   name: 'Restauratorium',
  //   description: 'Work in progress. The application allows to add restaurants to list and mark what places you visited, what restaurant you like or dislike.',
  //   img: restauratorium,
  //   technologies: ['Html', 'Css', 'Javascript', 'React', 'React Redux', 'Styled Componenets'],
  //   githubLink: 'https://github.com/mateuszwawrzonkowski/Restauratorium',
  //   pageLink: 'https://mateuszwawrzonkowski.github.io/Restauratorium/',
  // },
  {
    index: 4,
    name: 'Enyo',
    description: 'Landing page based on Enyo template',
    img: enyo,
    technologies: ['Html', 'Css', 'Javascript'],
    // githubLink: 'https://github.com/mateuszwawrzonkowski/Restauratorium',
    pageLink: 'https://cranky-haibt-fc15e7.netlify.app/',
  },
  {
    index: 5,
    name: 'Gallery-api',
    description: 'Easy gallery app using api. Created for learning purpose',
    img: gallery,
    technologies: ['Html', 'Css', 'Javascript', 'React', 'Styled Componenets', 'API'],
    githubLink: 'https://github.com/mateuszwawrzonkowski/Gallery-api',
    pageLink: 'https://mateuszwawrzonkowski.github.io/Gallery-api/',
  },
];

const Projects = () => {
  const projects = projectsItems.map(({
    index, name, description, img, technologies, githubLink, pageLink,
  }) => (
    <Project
      key={index}
      name={name}
      description={description}
      img={img}
      technologies={technologies}
      githubLink={githubLink}
      pageLink={pageLink}
    />
  ));

  return (
    <>
      <div className={styles.wrapper}>
        <Menu navLinks={navLinks} showMenuButton />
        <div className={styles.projects}>
          {projects}
        </div>
      </div>
    </>
  );
};

export default Projects;
