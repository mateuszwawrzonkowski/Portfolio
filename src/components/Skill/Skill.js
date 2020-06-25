import React from 'react';

const Skill = ({ title, icons }) => {

    const skillItems = icons.map(icon =>
        <li key={icon.name}>
            <figure>
                <img src={icon.icon} alt={icon.name} />
                <figcaption>{icon.name}</figcaption>
            </figure>
        </li>
    )

    return (
        <>
            <h1>{title}</h1>
            <ul>
                {skillItems}
            </ul>
        </>
    )
}

export default Skill;