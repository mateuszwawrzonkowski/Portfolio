import React from 'react';
import styles from 'components/Skill/Skill.module.scss';
import PropTypes from 'prop-types';

const Skill = ({ title, icons }) => {
  const skillItems = icons.map(({ name, icon }) => (
    <li key={name}>
      <figure>
        <img src={icon} alt={name} />
        <figcaption>{name}</figcaption>
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
  icons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Skill;
