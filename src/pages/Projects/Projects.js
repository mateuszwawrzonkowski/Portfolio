import React from 'react';
import styles from 'pages/Projects/Projects.module.scss'
import Header from 'components/Header/Header';
import Menu from 'components/Menu/Menu';
import Project from 'components/Project/Project';
import portfolio from 'assets/Projects/portfolio.png';

const navLinks = [
    { name: "home", to: "/" },
    { name: "about me", to: "/about" },
    { name: "skills", to: "/skills" },
    { name: "contact", to: "/contact" }
]

const projectsItems = [
    {
        index: 1,
        name: "portfolio",
        description: "My portfolio, work in progress",
        img: portfolio,
        technologies: ["Html", "Css", "Javascript", "React", "Css Modules", "Eslint", "AdobeXD"]
    },
    {
        index: 2,
        name: "jakis projekt",
        description: "My portfolio, work in progress",
        img: portfolio,
        technologies: ["Html", "Css", "Javascript", "React", "Css Modules", "Eslint", "AdobeXD"]
    },
]

const Projects = () => {

    const projects = projectsItems.map(item => (
        <Project
            key={item.index}
            name={item.name}
            description={item.description}
            img={item.img}
            technologies={item.technologies}
        />
    ))

    return (
        <>
            <div className={styles.wrapper}>
                <Menu navLinks={navLinks} showMenuButton />
                <Header
                    page="project"
                    navLinks={navLinks}
                />
                <div className={styles.projects}>
                    {projects}
                </div>
            </div>
        </>
    )
}

export default Projects;