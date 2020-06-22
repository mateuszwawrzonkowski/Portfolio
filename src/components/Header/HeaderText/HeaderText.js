import React from 'react';
import styles from 'components/Header/HeaderText/HeaderText.module.scss';
import Header from '../Header';


const HeaderText = ({ page }) => {

    return (
        <>
            <p className={styles.header__text}>dzien dobry</p>
        </>
    )
}

export default HeaderText;