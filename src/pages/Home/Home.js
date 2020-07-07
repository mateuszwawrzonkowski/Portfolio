import React from 'react';
import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';
import Navigation from 'components/Navigation/Navigation';
import styles from 'pages/Home/Home.module.scss';
import footerImg from 'assets/Footer.png';

const navLinks = [
    { name: "about me", to: "/about" },
    { name: "projects", to: "/projects" },
    { name: "skills", to: "/skills" },
    { name: "contact", to: "/contact" }
]

const Home = () => (
    <>
        <div className={styles.wrapper}>
            <Menu navLinks={navLinks} />
            <Header page="homepage" />
            <p className={styles.header__hi}>Hi! Welcome on my... </p>
            <p className={styles.header__page}>page</p>
            <p className={styles.header__whoiam}>
                <span>Mateusz Wawrzonkowski</span>
                <span>Junior frontend developer</span>
            </p>
            <Navigation />
            <div className={styles.footer}>
                <img src={footerImg} alt="footer" />
                <p>Copyright 2020 Mateusz Wawrzonkowski</p>
            </div>
        </div>

    </>
);


export default Home;