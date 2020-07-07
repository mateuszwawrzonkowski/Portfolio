import React from 'react';
import styles from 'pages/Projects/Projects.module.scss'
import Menu from 'components/Menu/Menu';
import Project from 'components/Project/Project';
import portfolio from 'assets/Projects/portfolio.png';
import activebox from 'assets/Projects/ActiveBox.png';

const navLinks = [
    { name: "home", to: "/" },
    { name: "about me", to: "/about" },
    { name: "skills", to: "/skills" },
    { name: "contact", to: "/contact" }
]

const projectsItems = [
    {
        index: 1,
        name: "Portfolio",
        description: "My portfolio and first experience with React Router, and React Hooks. Hope you like it.",
        img: portfolio,
        link: "https://github.com/mateuszwawrzonkowski/Portfolio",
        technologies: ["Html", "Css", "Javascript", "React", "Css Modules", "Eslint", "AdobeXD"],
        githubLink: "https://github.com/mateuszwawrzonkowski/Portfolio",
        pageLink: "https://mateuszwawrzonkowski.github.io/Portfolio/#/"
    },
    {
        index: 2,
        name: "Active Box",
        description: "Created on the basis of Kamal Chaneman design. Programmed 100% by me. Created for learning purpose.",
        img: activebox,
        link: "https://github.com/mateuszwawrzonkowski/Portfolio",
        technologies: ["Html", "Css", "Javascript", "jQuery"],
        githubLink: "https://github.com/mateuszwawrzonkowski/Portfolio",
        pageLink: "https://mateuszwawrzonkowski.github.io/Portfolio/#/"
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
            githubLink={item.githubLink}
            pageLink={item.pageLink}
        />
    ))

    return (
        <>
            <div className={styles.wrapper}>
                <Menu navLinks={navLinks} showMenuButton />
                <div className={styles.projects}>
                    {projects}
                </div>
            </div>
        </>
    )
}

export default Projects;