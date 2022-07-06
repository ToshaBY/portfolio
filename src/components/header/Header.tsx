import React from 'react';
import style from './Header.module.css';
import {Nav} from "../nav/Nav";

export const Header = React.memo(() => {

    return (
            <div className={style.header}>
                <Nav/>
            </div>
    );
})
