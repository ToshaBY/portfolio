import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";


export const Skills = React.memo(() => {
    const skills = [
        {
            title: 'HTML',
            description: 'HTML is the most basic building block of the Web.' +
                'It describes the content of a webpage and how it should be displayed.'
        },
        {
            title: 'CSS',
            description: 'CSS is a style sheet language used to describe the style of an HTML document.' +
                'It is used to describe how HTML elements should be displayed.'
        },
        {
            title: 'JavaScript',
            description: 'JavaScript is a lightweight, interpreted programming language with first-class functions.' +
                'It is most commonly used to make web pages interactive, but it can also be used to make a variety of other things.'
        },
        {
            title: 'React',
            description: 'React is a JavaScript library for building user interfaces.' +
                'It is used for building single-page applications, mobile apps, and everything in between.'
        },
        {
            title: 'TypeScript',
            description: 'TypeScript is a superset of JavaScript that compiles to plain JavaScript.' +
                'It is used to write more concise code than JavaScript.'
        },
    ]

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={styleContainer.contentContainer}>
                    {
                        skills.map(el => {
                            return <Skill title={el.title}
                                          description={el.description}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
})
