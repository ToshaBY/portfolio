import React from 'react';
import styles from './Header.module.css';

type HeaderPropsType = {}

export const Header: React.FC<HeaderPropsType> = React.memo(() => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.header__title}>Header</div>
                <div className={styles.header__menu}>
                    <div className={styles.header__menuItem}>Main</div>
                    <div className={styles.header__menuItem}>Skills</div>
                    <div className={styles.header__menuItem}>Projects</div>
                    <div className={styles.header__menuItem}>Contacts</div>
                </div>
            </div>

        </>
    );
})