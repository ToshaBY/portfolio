import React from 'react';
import style from './Hire.module.css';
import styleContainer from '../../common/styles/Container.module.css';

export const Hire = React.memo(() => {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h2 className={style.title}>Considering options for remote work</h2>
                <button className={style.button}>Hire me</button>
            </div>
        </div>
    );
})
