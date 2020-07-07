import React from 'react';
import styles from 'pages/Skills/Skills.module.scss';
import Menu from 'components/Menu/Menu';
import Skill from 'components/Skill/Skill';

const navLinks = [
    { name: "home", to: "/" },
    { name: "about me", to: "/about" },
    { name: "projects", to: "/projects" },
    { name: "contact", to: "/contact" }
]

const iconSize = 60;

const SkillSections = [
    {
        title: "Skills",
        Icons: [{ name: "html5", icon: `https://img.icons8.com/color/${iconSize}/000000/html-5.png` },
        { name: "css3", icon: `https://img.icons8.com/color/${iconSize}/000000/css3.png` },
        { name: "sass", icon: `https://img.icons8.com/color/${iconSize}/000000/sass.png` },
        { name: "javascript es6", icon: `https://img.icons8.com/color/${iconSize}/000000/javascript.png` },
        { name: "react", icon: `https://img.icons8.com/officel/${iconSize}/000000/react.png` }
        ]
    },

    {
        title: "Tools",
        Icons: [
            { name: "visual studio code", icon: `https://img.icons8.com/fluent/${iconSize}/000000/visual-studio-code-2019.png` },
            { name: "git", icon: `https://img.icons8.com/color/${iconSize}/000000/git.png` },
            { name: "github", icon: `https://img.icons8.com/fluent/${iconSize}/000000/github.png` },
            { name: "adobe xd", icon: `https://img.icons8.com/color/${iconSize}/000000/adobe-xd.png` },
            { name: "adobe photoshop", icon: `https://img.icons8.com/fluent/${iconSize}/000000/adobe-photoshop.png` },
            { name: "npm", icon: `https://img.icons8.com/color/${iconSize}/000000/npm.png` }
        ]
    },

    {
        title: "Additional skills",
        Icons: [
            { name: "C#", icon: `https://img.icons8.com/color/${iconSize}/000000/c-sharp-logo.png` },
            { name: "SQL", icon: `https://img.icons8.com/nolan/${iconSize}/sql.png` }
        ]
    }
]


const Skills = () => {

    const SkillsSections = SkillSections.map(item => (
        <Skill
            key={item.Icons}
            name={item.Icons}
            title={item.title}
            icons={item.Icons}
        />
    ))

    return (
        <>

            <div className={styles.wrapper}>
                <Menu navLinks={navLinks} showMenuButton />
                <div className={styles.skillSections}>
                    {SkillsSections}
                </div>
                <div className={styles.footer}>
                    <a href="https://icons8.com/icon/59898/css-filetype">icons by Icons8</a>
                </div>
            </div>
        </>
    )
}

export default Skills;