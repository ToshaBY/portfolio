import React from 'react';
import style from './Nav.module.css';
import { Link } from 'react-scroll';

export const Nav = React.memo(() => {
    return (
        <div className={style.nav}>
            <Link to='/' spy={true} smooth={true} offset={50} duration={500}>Main</Link>
            {/*<a href="</>">Main</a>*/}
            {/*<a href="</>">Skills</a>*/}
            {/*<a href="</>">Projects</a>*/}
            {/*<a href="</>">Contacts</a>*/}
        </div>
    )
})
