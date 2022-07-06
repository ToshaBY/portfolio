import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";


export const Skills = React.memo(() => {
    const skills = [
        {
            id: 1,
            title: 'HTML',
            description: 'HTML is the most basic building block of the Web.' +
                'It describes the content of a webpage and how it should be displayed.'
        },
        {
            id: 2,
            title: 'CSS',
            description: 'CSS is a style sheet language used to describe the style of an HTML document.' +
                'It is used to describe how HTML elements should be displayed.'
        },
        {
            id: 3,
            title: 'JavaScript',
            description: 'JavaScript is a lightweight, interpreted programming language with first-class functions.' +
                'It is most commonly used to make web pages interactive, but it can also be used to make a variety of other things.'
        },
        {
            id: 4,
            title: 'React',
            description: 'React is a JavaScript library for building user interfaces.' +
                'It is used for building single-page applications, mobile apps, and everything in between.'
        },
        {
            id: 5,
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
                            return <Skill key={el.id}
                                          title={el.title}
                                          description={el.description}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
})
