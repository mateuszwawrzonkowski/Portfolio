import React from 'react';
import styles from 'pages/Contact/Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Menu from 'components/Menu/Menu';

const navLinks = [
    { name: "home", to: "/" },
    { name: "about me", to: "/about" },
    { name: "projects", to: "/projects" },
    { name: "skills", to: "/skills" },
]

const contactItems = [
    { name: "mateusz.wawrzonkowski@gmail.com", src: "mailto:mateusz.wawrzonkowski@gmail.com", icon: faEnvelope, color: "#D44638" },
    { name: "facebook", src: "https://www.facebook.com/", icon: faFacebook, color: "#3B5998" },
    { name: "linkedin", src: "https:/linkedin.com/", icon: faLinkedin, color: "#0e76a8" },
]

const Contact = () => {

    const contact = contactItems.map(item =>
        <li key={item.name}>
            <a href={item.src}>
                <FontAwesomeIcon icon={item.icon} style={{ color: `${item.color}` }} />
                {item.name}
            </a>
        </li>
    )

    return (
        <div className={styles.wrapper}>
            <Menu navLinks={navLinks} showMenuButton />
            <div className={styles.shape_top} />
            <div className={styles.shape_bottom} />
            <h1>Contact:</h1>
            <div className={styles.contact}>
                <ul>
                    {contact}
                </ul>
            </div>
        </div>
    )
}

export default Contact;