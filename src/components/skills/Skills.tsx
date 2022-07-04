import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";


export const Skills = React.memo(() => {
    const skills = [
        {
            title: 'HTML',
            description: 'HTML is the most basic building block of the Web. It describes the structure of your Web pages and provides the necessary tools to build them.'
        },
        {
            title: 'CSS',
            description: 'CSS is a style sheet language used to describe the presentation of a document written in HTML. CSS is designed to enable you to control the style of a web page by applying rules to each HTML element.'
        },
        {
            title: 'JavaScript',
            description: 'JavaScript is a lightweight, interpreted programming language with first-class functions. It is most commonly used to make web pages interactive, but it can also be used to make a variety of things, including serving as a scripting language for back-end programming, and is used in a wide variety of devices and applications.'
        },
        {
            title: 'React',
            description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.'
        },
        {
            title: 'TypeScript',
            description: 'TypeScript is a strict superset of JavaScript that compiles to plain JavaScript. It is a programming language that adds optional static typing to the JavaScript language.'
        }


    ]

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {
                        skills.map( el => {
                            return <Skill title={el.title}
                                    description={el.description}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
})
