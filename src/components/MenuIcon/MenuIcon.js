import React, { useState } from 'react'
import styles from 'components/MenuIcon/MenuIcon.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuIcon = ({ showMenuButton }) => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    const menuBgClass = open ? styles.menuBgOpened : styles.menuBg;

    return (
        <>
            {
                showMenuButton ?
                    <button onClick={handleClick} className={styles.menuIcon} >
                        {open ?
                            <FontAwesomeIcon icon={faTimes} />
                            :
                            <FontAwesomeIcon icon={faBars} />
                        }
                    </button>
                    : null
            }
            <div className={menuBgClass} />
        </>
    )
}

export default MenuIcon;