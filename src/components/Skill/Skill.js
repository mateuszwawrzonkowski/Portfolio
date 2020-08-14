import React from 'react';
import styles from 'components/Skill/Skill.module.scss';
import PropTypes from 'prop-types';

const Skill = ({ title, icons }) => {
  const skillItems = icons.map((icon) => (
    <li key={icon.name}>
      <figure>
        <img src={icon.icon} alt={icon.name} />
        <figcaption>{icon.name}</figcaption>
      </figure>
    </li>
  ));

  return (
    <>
      <h1>{title}</h1>
      <ul className={styles.skills}>
        {skillItems}
      </ul>
    </>
  );
};

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.string.isRequired,
};

export default Skill;
