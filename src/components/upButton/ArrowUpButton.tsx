import React from 'react';
import style from './ArrowUpButton.module.scss';
import {Link} from 'react-scroll'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowUp} from "@fortawesome/free-solid-svg-icons";

export const ArrowUpButton = React.memo(() => {
    return (
        <div className={style.arrowUpButton}>
            <Link to='nav' spy={true} smooth={true} offset={0} duration={500}>
                <FontAwesomeIcon icon={faCircleArrowUp}
                                 size={'3x'}
                                 color={'white'}
                                 beat={true}/>
            </Link>
        </div>
    )
})
