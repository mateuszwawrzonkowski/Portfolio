import React from 'react';
import styles from 'pages/About/About.module.scss';
import Header from 'components/Header/Header';
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
            <Header
                page="about"
                navLinks={navLinks}
                headerHeight="40vh"
            />
            <div className={styles.about}>
                <p>
                    Hello. My name is Mateusz.
                    I'm third year student of
                    computer science. I started
                    programming about two years
                    ago. Before my passion was
                    computer graphic but I decided
                    to connect my interest in
                    graphic and programming.
                    <br /><br />
                    Also I love cooking, good food,
                    mountains and kittys.
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit harum eos. Hic labore quo et voluptate natus voluptatum ipsa, est, maxime libero, tempora excepturi maiores magnam sed? Necessitatibus, quidem?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi officiis quo fuga iure excepturi doloribus repellat nostrum alias distinctio voluptatem molestiae ut ea possimus, doloremque nulla dicta praesentium inventore laboriosam.
                </p>
            </div>
            <div className={styles.face}>
                <img src={faceImg} alt="face" />
            </div>
        </div>
    </>
)

export default About;