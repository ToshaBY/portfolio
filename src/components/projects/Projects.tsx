import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../../common/styles/Container.module.css";
import {Project} from "./project/Project";
import {Title} from "../../common/components/title/Title";

export const Projects = React.memo(() => {
    const projects = [
        {
            id: 1,
            title: 'Counter',
            description: 'Simple counter',
            url: 'https://toshaby.github.io/it-incubator-counter/',
            image: ''
        },
        {
            id: 2,
            title: 'To-Do List',
            description: 'Simple to-do list',
            url: 'https://toshaby.github.io/it-incubator-todo-list-ts/',
            image: ''
        },
        {
            id: 3,
            title: 'Social network',
            description: 'Simple social network',
            url: 'https://toshaby.github.io/it-incubator-samurai-way/',
            image: ''
        }
    ]

    return (
        <div className={`${styleContainer.block} ${style.projectsBlock}`}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title="Projects"/>

                <div className={styleContainer.contentContainer}>
                    {
                        projects.map(el => {
                            return (
                                <Project key={el.id}
                                         title={el.title}
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
