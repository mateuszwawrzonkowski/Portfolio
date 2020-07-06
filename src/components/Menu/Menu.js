import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styles from 'components/Menu/Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ showMenuButton, navLinks }) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    const menuClass = open ? styles.menuOpened : styles.menu;

    const navigation = navLinks.map(item => (
        <li key={item.name} className={styles.navigation__Item}>
            <NavLink
                to={item.to}
                className={styles.navigation__Item__Link}
                activeClassName={styles.navItemLinkActive}>{item.name}</NavLink>
        </li >
    )
    );

    return (
        <>
            <div className={styles.wrapper}>

                <div className={menuClass} >
                    {
                        showMenuButton ?
                            <button onClick={handleClick} className={styles.menuButton} >
                                {open ?
                                    <FontAwesomeIcon icon={faTimes} />
                                    :
                                    <FontAwesomeIcon icon={faBars} />
                                }
                            </button>
                            : null
                    }
                    <nav>
                        <ul className={styles.navigation}>
                            {navigation}
                        </ul>
                    </nav>
                </div>
                <div className={styles.circle} />
            </div>
        </>
    )
}

export default Menu;