import React from 'react';
import styles from 'components/Project/Project.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Project = ({
  name, img, description, technologies, githubLink, pageLink,
}) => {
  const technologyItems = technologies.map((technology) => (
    <li key={technology + name}>{technology}</li>));

  return (
    <>
      <div className={styles.project}>
        <figure>
          <div className={styles.projectImg}>
            <div className={styles.buttons}>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faGithubSquare}
                />

              </a>
              <a href={pageLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faPlayCircle}
                />

              </a>
            </div>
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
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
};

export default Project;
