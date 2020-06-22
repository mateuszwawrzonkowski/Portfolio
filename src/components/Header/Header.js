import React from 'react';
import styles from 'components/Header/Header.module.scss';
import Hamburger from 'components/Hamburger/Hamburger';
import HeaderText from 'components/Header/HeaderText/HeaderText';
const Header = ({page}) => {

    return (
        <>
            <div className={styles.header}>
                <div className={styles.header__shape1}/>
                <div className={styles.header__circle} />
                {page !== "homepage" ? <Hamburger show /> : <Hamburger/>}
                <div className={styles.header__shapes} />
                {/* <HeaderText page={page} /> */}
            </div>
        </>
    )

}


export default Header;