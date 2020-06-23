import React, { useMemo } from 'react';
import styles from 'components/Header/Header.module.scss';
import MenuIcon from 'components/MenuIcon/MenuIcon';


const Header = ({ page }) => {

    const sectionTitle = useMemo(() => {
        switch (page) {
            case 'about':
                return 'About me'
            case 'contact':
                return 'Contact'
            case page:
                return `${page.charAt(0).toUpperCase() + page.slice(1)}s`
            default:
                return null
        }
    }, [page]);

    return (
        <>
            {page === 'homepage' ? <MenuIcon /> : <MenuIcon showMenuButton />}
            <div className={styles.header} style={page !== 'homepage' ? { height: '40vh' } : null}>
                {page === 'homepage' ? <div className={styles.header__bottomShape} /> : null}
                <div className={styles.header__topShapes} />
                {page !== 'homepage' && <p className={styles.header__text} >{sectionTitle}</p>}
            </div>
        </>
    )
}


export default Header;