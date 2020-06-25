import React from 'react';
import styles from 'components/Project/Project.module.scss';
const Project = ({ key, name, img, description, technologies }) => {

    const technologyItems = technologies.map(technology => <li key={key}>{technology}</li>);

    return (
        <>
            <div className={styles.wrapper}>
                <figure>
                    <div className={styles.projectImg}>
                        <img src={img} alt={name} />
                    </div>
                    <figcaption>
                        <div className={styles.figcaption}>
                            <h1>{name}</h1>
                            <p>{description}</p>
                            <ul>
                                {technologyItems}
                            </ul>
                        </div>
                    </figcaption>

                </figure>
            </div>
        </>
    )
}

export default Project;