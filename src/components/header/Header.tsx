import React from 'react';
import style from './Header.module.css';
import styleContainer from "../../common/styles/Container.module.scss";
import {Nav} from '../nav/Nav';
import { Link } from 'react-scroll'

export const Header = React.memo(() => {
    return (
        <div className={`${styleContainer.block} ${style.header}`}>
            <Nav/>
        </div>
    );
})
