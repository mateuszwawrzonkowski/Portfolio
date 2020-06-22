import React, { useState } from 'react'
import styles from 'components/Hamburger/Hamburger.module.scss';

const Hamburger = ({ show }) => {

    return (
        <>
            {
                show ?
                    <button className={styles.hamburger}>
                        <span className={styles.hamburger__box}>
                            <span className={styles.hamburger__box__inner} />
                        </span>
                    </button>
                    : null
            }
        </>
    )
}

export default Hamburger;