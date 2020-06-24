import React from 'react';
import styles from 'pages/Projects/Projects.module.scss'
import Header from 'components/Header/Header';

const navLinks = [
    { name: "home", to: "/" },
    { name: "about me", to: "/about" },
    { name: "skills", to: "/skills" },
    { name: "contact", to: "/contact" }
]

const Projects = () => {



    return (
        <>

            <div className={styles.wrapper}>
                <Header
                    page="project"
                    navLinks={navLinks}
                />
                <div className={styles.projects}>
                    {/* {projects} */}
                </div>
            </div>
        </>
    )
}

export default Projects;