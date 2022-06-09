import React from 'react';
import styles from './Footer.module.css';

type FooterPropsType = {}

export const Footer: React.FC<FooterPropsType> = React.memo(() => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer__name}>
                    Anton Rybakou
                </div>
                <div className={styles.footer__social}>
                    <div className={styles.footer__socialItem}/>
                    <div className={styles.footer__socialItem}/>
                    <div className={styles.footer__socialItem}/>
                    <div className={styles.footer__socialItem}/>
                </div>
                <div className={styles.footer__copyright}>
                    © 2022 All rights reserved
                </div>
            </div>
        </>
    );
})