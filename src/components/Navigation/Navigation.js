import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from 'components/Navigation/Navigation.module.scss';

const navLinks = [
    { name: "about me", to: "/about" },
    { name: "projects", to: "/projects" },
    { name: "skills", to: "/skills" },
    { name: "contact", to: "/contact" }
]

const Navigation = () => {


    const navigation = navLinks.map(item => (
        <li key={item.name} className={styles.navItem}>
            <NavLink
                to={item.to}
                className={styles.navItemLink}
                activeClassName={styles.navItemLinkActive}>{item.name}</NavLink>
        </li >
    )
    );

    return (
        <nav>
            <ul className={styles.wrapper}>
                {navigation}
            </ul>
        </nav>
    )
}


export default Navigation;
