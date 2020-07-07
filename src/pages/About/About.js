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
                    I'm currently third year student of
                    computer science with specialization in Internet engineering and I work in big corporation as Sales Support Bussines Specialist but I decided to change ma career. I started
                    programming about two years
                    ago and it gives me a lot of satisfaction. My passion is also
                    3d computer graphic. If you want to check some of my 3d projects visit my <a href="https://www.deviantart.com/wawko2">DeviantArt site</a>.
                    <br /><br />
                    Also I love cooking, good food,
                    mountains and kittys.
                </p>

            </div>
            <div className={styles.face}>
                <div className={styles.circle}>
                    <div className={styles.circle__border} />
                    <img src={faceImg} alt="face" />
                </div>
            </div>
        </div>
    </>
)

export default About;