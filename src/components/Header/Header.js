import React, { useMemo } from 'react';
import styles from 'components/Header/Header.module.scss';

const Header = ({ page, noBg }) => {

    const sectionTitle = useMemo(() => {
        switch (page) {
            case 'about':
                return 'About me'
            case 'contact':
                return 'Contact'
            case 'skill':
                return null
            case page:
                return `${page.charAt(0).toUpperCase() + page.slice(1)}s`
            default:
                return null
        }
    }, [page]);

    return (
        <>
            <header className={styles.header}>
                {noBg ? null : <div className={styles.header__background} />}
                {page !== 'homepage' && <p className={styles.header__pageTitle} >{sectionTitle}</p>}
            </header>
        </>
    )
}


export default Header;