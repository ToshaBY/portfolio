import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../../common/styles/Container.module.css";
import {Project} from "./project/Project";

export const Projects = React.memo(() => {
    const projects = [
        {
            title: 'Counter',
            description: 'Simple counter',
            url: 'https://toshaby.github.io/it-incubator-counter//',
            image: './src/assets/images/projects/counter.png'
        },
        {
            title: 'To-Do List',
            description: 'Simple to-do list',
            url: 'https://toshaby.github.io/it-incubator-todo-list-ts',
            image: ''
        },
        {
            title: 'Social network',
            description: 'Simple social network',
            url: 'https://toshaby.github.io/it-incubator-samurai-way',
            image: ''
        }
    ]

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={styleContainer.contentContainer}>
                    {
                        projects.map(el => {
                            return (
                                <Project title={el.title}
                                         description={el.description}
                                         url={el.url}
                                         image={el.image}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
})
