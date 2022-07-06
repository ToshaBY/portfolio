import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../../common/styles/Container.module.css";

export const Footer = React.memo(() => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Anton Rybakou</h2>
                <div className={style.socialBlock}>
                    <div className={style.socialItem}/>
                    <div className={style.socialItem}/>
                    <div className={style.socialItem}/>
                    <div className={style.socialItem}/>
                </div>
                <div className={style.copyright}>
                    © 2022 All rights reserved
                </div>
            </div>
        </div>
    );
})
