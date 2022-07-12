import React from 'react';
import style from './Skill.module.scss';

type SkillPropsType = {
    title: string,
    icon: string
}

export const Skill: React.FC<SkillPropsType> = React.memo(({title, icon}) => {
    return (
        <div className={style.skill}>
            <img src={icon} alt={'skillImage'}/>
            <h3>{title}</h3>
        </div>
    );
})