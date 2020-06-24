import React from 'react';
import styles from 'pages/Projects/Projects.module.scss'
import Header from 'components/Header/Header';
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
        name: "portfolio",
        description: "My portfolio, work in progress",
        img: portfolio,
        technologies: ["Html", "Css", "Javascript", "React", "Css Modules", "Eslint", "AdobeXD"]
    },
    {
        name: "portfolio",
        description: "My portfolio, work in progress",
        img: portfolio,
        technologies: ["Html", "Css", "Javascript", "React", "Css Modules", "Eslint", "AdobeXD"]
    },
]

const Projects = () => {



    const projects = projectsItems.map(item => (
        <Project
            key={item.name}
            name={item.name}
            description={item.description}
            img={item.img}
            technologies={item.technologies}
        />
    ))

    return (
        <>

            <div className={styles.wrapper}>
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