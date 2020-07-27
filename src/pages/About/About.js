import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'pages/About/About.module.scss';
import Menu from 'components/Menu/Menu';
import faceImg from 'assets/face.png';

const navLinks = [
  { name: 'home', to: '/' },
  { name: 'projects', to: '/projects' },
  { name: 'skills', to: '/skills' },
  { name: 'contact', to: '/contact' },
];

const About = () => (
  <>
    <div className={styles.wrapper}>
      <Menu navLinks={navLinks} showMenuButton />
      <div className={styles.about}>
        <h1>about me</h1>
        <p>
          Hi. My name is Mateusz. I&apos;m a third year student in computer science with a
          specializationin Internet engineering.I worked for Sony Poland as a Sales Promoter and
          then as aSales Bussines Support Specialist, but I decided to change my career. Computers
          has always been my passion - I started with 3D computer graphics, then I discovered
          programming. It gives me a lot of satisfaction, so I decided to combine my professional
          career with it. On this page you can check my
          {' '}
          <NavLink to="/projects">projects</NavLink>
          {' '}
          and if you want to check some of my 3d projects visit my
          {' '}
          <a href="https://www.deviantart.com/wawko2">DeviantArt</a>
          {' '}
          page.
          <br />
          <br />
          I am currently looking for a job or an internship for the position of Front End Developer.
          <br />
          <br />
          I also love to cook, eat well and travel. Have a nice day!
        </p>
      </div>
      <div className={styles.face}>
        <div className={styles.circle}>
          <div className={styles.circle__border} />
          <img src={faceImg} alt="face" />
        </div>
      </div>
    </div>
  </>
);

export default About;
