import React from 'react';
import style from './Project.module.scss';

type ProjectsPropsType = {
    title: string,
    description: string,
    url: string,
    style: {
        backgroundImage: string
    }
}

export const Project: React.FC<ProjectsPropsType> = React.memo(({
                                                                    title,
                                                                    description,
                                                                    url,
                                                                    ...props
                                                                }) => {
    return (
        <div className={style.project}>
            <div className={style.imageContainer}
                 style={props.style}>
                <a href={url} rel="noreferrer" target="_blank">View</a>
            </div>

            <div className={style.descriptionContainer}>
                <h3 className={style.projectTitle}>{title}</h3>
                <span className={style.description}>{description}</span>
            </div>
        </div>
    );
})
