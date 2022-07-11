import React from 'react';
import style from './Main.module.css';
import styleContainer from '../../common/styles/Container.module.css';

export const Main = React.memo(() => {
    return (
        <div className={`${styleContainer.block} ${style.mainBlock}`}>
            <div className={styleContainer.container}>
                <div className={style.content}>
                    <span>Hello there,</span>
                    <h1>I'm Anton Rybakou</h1>
                    <p>Front-end developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
})
