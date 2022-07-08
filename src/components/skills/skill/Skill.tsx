import React from 'react';
import style from './Skill.module.css';
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type SkillPropsType = {
    title: string,
    icon: IconProp
}

export const Skill: React.FC<SkillPropsType> = React.memo(({title, icon}) => {
    return (
        <div className={style.skill}>
                <FontAwesomeIcon icon={icon}
                                 size={'5x'}
                                 color={'white'}/>
            <h3>{title}</h3>
        </div>
    );
})