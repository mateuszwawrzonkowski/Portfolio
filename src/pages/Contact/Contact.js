import React from 'react';
import styles from 'pages/Contact/Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPortrait } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


import Menu from 'components/Menu/Menu';
import CV from 'assets/CV_MateuszWawrzonkowski_Pl.png';

const navLinks = [
  { name: 'home', to: '/' },
  { name: 'about me', to: '/about' },
  { name: 'projects', to: '/projects' },
  { name: 'skills', to: '/skills' },
];

const contactItems = [
  {
    name: 'mateusz.wawrzonkowski@gmail.com', src: 'mailto:mateusz.wawrzonkowski@gmail.com', icon: faEnvelope, color: '#ef3a25',
  },
  {
    name: 'facebook', src: 'https://www.facebook.com/', icon: faFacebook, color: '#2d51a8',
  },
  {
    name: 'linkedin', src: 'https:/linkedin.com/', icon: faLinkedin, color: '#007dbb',
  },
  {
    name: 'curriculum vitae', src: CV, icon: faPortrait, color: '#fed835',
  },
];

const Contact = () => {
  const contact = contactItems.map(({
    name, src, icon, color,
  }) => (
    <li key={name}>
      <a href={src}>
        <FontAwesomeIcon icon={icon} style={{ color: `${color}` }} />
        {name}
      </a>
    </li>
  ));

  return (
    <div className={styles.wrapper}>
      <Menu navLinks={navLinks} showMenuButton />
      <div className={styles.shape_top} />
      <div className={styles.shape_bottom} />
      <h1>Contact:</h1>
      <div className={styles.contact}>
        <ul>
          {contact}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
