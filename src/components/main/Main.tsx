import React from 'react';
import styles from './Main.module.css';

export const Main: React.FC = React.memo(() => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span>Hi there</span>
                    <h1>I'm Anton Rybakou</h1>
                    <p>front-end developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>


        </div>
    );
})