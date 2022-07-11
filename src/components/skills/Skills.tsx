import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";
import {faCss3Alt, faGitAlt, faGithub, faHtml5, faJs, faReact, faTypo3} from '@fortawesome/free-brands-svg-icons'

export const Skills = React.memo(() => {
    const skills = [
        {
            id: 1,
            title: 'HTML',
            icon: faHtml5
        },
        {
            id: 2,
            title: 'CSS',
            icon: faCss3Alt
        },
        {
            id: 3,
            title: 'JavaScript',
            icon: faJs
        },
        {
            id: 4,
            title: 'React',
            icon: faReact
        },
        {
            id: 5,
            title: 'TypeScript',
            icon: faTypo3
        },
        {
            id: 6,
            title: 'Git',
            icon: faGitAlt
        },
        {
            id: 7,
            title: 'GitHub',
            icon: faGithub
        }
    ]

    return (
        <div className={`${styleContainer.block} ${style.skillsBlock}`}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={styleContainer.contentContainer}>
                    {
                        skills.map(el => {
                            return <Skill key={el.id}
                                          title={el.title}
                                          icon={el.icon}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
})
