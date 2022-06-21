import React from 'react';
import styles from './Nav.module.css';

type NavPropsType = {}

export const Nav: React.FC<NavPropsType> = React.memo( () => {
    return (
            <div className={styles.nav}>
                <a href="">Main</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contacts</a>
            </div>
    );
})
