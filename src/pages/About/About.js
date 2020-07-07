import React from 'react';
import styles from 'pages/About/About.module.scss';
import Menu from 'components/Menu/Menu';
import faceImg from 'assets/face.png';

const navLinks = [
    { name: "home", to: "/" },
    { name: "projects", to: "/projects" },
    { name: "skills", to: "/skills" },
    { name: "contact", to: "/contact" }
]

const About = () => (
    <>
        <div className={styles.wrapper}>
            <Menu navLinks={navLinks} showMenuButton />
            <div className={styles.about}>
                <h1>about me</h1>
                <p>
                    Hello. My name is Mateusz.
                    Site in progress...
                    {/* I'm third year student of
                    computer science. I started
                    programming about two years
                    ago. Before my passion was
                    computer graphic but I decided
                    to connect my interest in
                    graphic and programming.
                    <br /><br />
                    Also I love cooking, good food,
                    mountains and kittys.
                    <br /><br /> */}
                    {/* If you want to check some of my 3d projects vistit my   <a href="https://www.deviantart.com/wawko2">deviantart site</a>. */}
                </p>

            </div>
            <div className={styles.face}>
                <div className={styles.circle}>
                    <img src={faceImg} alt="face" />
                </div>
            </div>
        </div>
    </>
)

export default About;