import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import styles from 'pages/Home/Home.module.scss'
import footerImg from 'assets/Footer_320.png';

const Home = () => (
    <>
        <div className={styles.wrapper}>
            <div className={styles.imageBackground}>
                <div className={styles.imageBackground__circle}></div>
                <div className={styles.imageBackground__shapes}></div>
                <p className={styles.imageBackground__hello}>HELLO! Welcome in my... </p>
                <p className={styles.imageBackground__world}>world </p>
                <p className={styles.imageBackground__whoiam}>
                    <span>Mateusz Wawrzonkowski</span>
                    <span>Junior frontend developer</span>
                </p>
            </div>
            <Navigation />
            <div className={styles.footer}>
                <img src={footerImg} alt="footer" />
                <p>Copyright 2020 Mateusz Wawrzonkowski</p>
            </div>
        </div>

    </>
);


export default Home;