import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'components/Navigation/Navigation.module.scss';

const navLinks = [
  { name: 'about me', to: '/about' },
  { name: 'projects', to: '/projects' },
  { name: 'skills', to: '/skills' },
  { name: 'contact', to: '/contact' },
];

const Navigation = () => {
  const navigation = navLinks.map(({ name, to }) => (
    <li key={name} className={styles.navigation__Item}>
      <NavLink
        to={to}
        className={styles.navigation__Item__Link}
        activeClassName={styles.navItemLinkActive}
      >
        {name}

      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul className={styles.navigation}>
        {navigation}
      </ul>
    </nav>
  );
};


export default Navigation;
