import React from 'react';
import styles from 'pages/About/About.module.scss';
import faceImg from 'assets/face.png';
const About = () => (
    <>
        <div className={styles.wrapper}>
            <div className={styles.imageBackground}>
                <div className={styles.imageBackground__circle}>
                </div>
                <div className={styles.imageBackground__hamburger}>
                </div>
                <div className={styles.imageBackground__shapes}>
                    <p>About me</p>
                </div>
            </div>
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