import React from 'react';
import style from './Footer.module.css';
import styleContainer from "../../common/styles/Container.module.scss";
import {Title} from "../../common/components/title/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export const Footer = React.memo(() => {
    return (
        <div className={`${styleContainer.block} ${style.footerBlock}`}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={'Anton Rybakou'}/>

                <div className={style.socialBlock}>
                    <FontAwesomeIcon icon={faGithubSquare}
                                     size={'3x'}
                                     color={'white'}/>
                    <FontAwesomeIcon icon={faLinkedin}
                                     size={'3x'}
                                     color={'white'}/>
                    <FontAwesomeIcon icon={faTelegram}
                                     size={'3x'}
                                     color={'white'}/>
                    <FontAwesomeIcon icon={faEnvelope}
                                     size={'3x'}
                                     color={'white'}/>
                </div>

                <div className={style.copyright}>
                    © 2022 All rights reserved
                </div>
            </div>
        </div>
    );
})
