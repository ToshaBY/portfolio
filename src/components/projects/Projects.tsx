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
            description: 'TypeScript / React / Redux / Deploy',
            url: 'https://toshaby.github.io/it-incubator-counter/',
            style: {
                backgroundImage: `url(${counterImage})`
            }
        },
        {
            id: 2,
            title: 'To-Do List',
            description: 'TypeScript / React / MUI / Storybook / Redux / Redux-Thunk / Axios / Formik / React-router-dom / Unit tests / Deploy',
            url: 'https://toshaby.github.io/it-incubator-todo-list-ts/',
            style: {
                backgroundImage: `url(${todoImage})`
            }
        },
        {
            id: 3,
            title: 'Social network',
            description: 'TypeScript / React / MUI / Storybook / Redux / Redux-Thunk / Axios / Formik / React-router-dom / Unit tests / Deploy',
            url: 'https://github.com/ToshaBY/it-incubator-samurai-way',
            style: {
                backgroundImage: `url(${counterImage})`
            }
        }
    ]

    return (
        <div className={`${styleContainer.block} ${style.projectsBlock}`} id={'projects'}>
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
