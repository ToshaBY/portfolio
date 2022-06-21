import React from 'react';
import styles from './Header.module.css';
import {Nav} from "../Nav/Nav";

type HeaderPropsType = {}

export const Header: React.FC<HeaderPropsType> = React.memo(() => {

    return (
        <>
            <div className={styles.header}>
                <Nav/>
            </div>
        </>
    );
})