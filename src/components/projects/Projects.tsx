import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import {Project} from './project/Project';
import {Title} from '../../common/components/title/Title';
import counterImage from '../../assets/images/projects/counter.png';
import todoImage from '../../assets/images/projects/todolist.png';

export const Projects = React.memo(() => {
    const projects = [
        {
            id: 1,
            title: 'Counter',
            description: 'Simple counter',
            url: 'https://toshaby.github.io/it-incubator-counter/',
            style: {
                backgroundImage: `url(${counterImage})`
            }
        },
        {
            id: 2,
            title: 'To-Do List',
            description: 'Simple to-do list',
            url: 'https://toshaby.github.io/it-incubator-todo-list-ts/',
            style: {
                backgroundImage: `url(${todoImage})`
            }
        },
        {
            id: 3,
            title: 'Social network',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            url: 'https://toshaby.github.io/it-incubator-samurai-way/',
            style: {
                backgroundImage: `url(${counterImage})`
            }
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
                                         style={el.style}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
})
