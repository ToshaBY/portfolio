import React from 'react';
import style from './Footer.module.css';

export const Footer = React.memo(() => {
    return (
        <>
            <div className={style.footer}>
                <div className={style.footer__name}>
                    Anton Rybakou
                </div>
                <div className={style.footer__social}>
                    <div className={style.footer__socialItem}/>
                    <div className={style.footer__socialItem}/>
                    <div className={style.footer__socialItem}/>
                    <div className={style.footer__socialItem}/>
                </div>
                <div className={style.footer__copyright}>
                    © 2022 All rights reserved
                </div>
            </div>
        </>
    );
})
