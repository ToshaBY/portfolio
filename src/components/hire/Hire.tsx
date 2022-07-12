import React from 'react';
import style from './Hire.module.css';
import styleContainer from '../../common/styles/Container.module.scss';
import styleButton from '../../common/styles/Buttons.module.css';

export const Hire = React.memo(() => {
    return (
        <div className={`${styleContainer.block} ${style.hireBlock}`}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h2 className={style.title}>Considering options for remote work</h2>
                <button className={styleButton.primary}>Hire me</button>
            </div>
        </div>
    );
})
