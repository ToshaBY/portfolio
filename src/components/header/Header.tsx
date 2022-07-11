import React from 'react';
import style from './Header.module.css';
import styleContainer from "../../common/styles/Container.module.css";
import {Nav} from "../nav/Nav";

export const Header = React.memo(() => {
    return (
        <div className={`${styleContainer.block} ${style.header}`}>
            <Nav/>
        </div>
    );
})
