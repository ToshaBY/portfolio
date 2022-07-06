import React from 'react';
import style from './Project.module.css';

type ProjectsPropsType = {
    title: string,
    description: string,
    url: string,
    image: string
}

export const Project: React.FC<ProjectsPropsType> = React.memo(({title, description, url, image}) => {
    return (
        <div className={style.project}>
            <div className={style.imageContainer}
                 // style={{backgroundImage: `url(${image})`}}>
                    style={{backgroundImage: `url(./src/assets/images/projects/counter.png)`}}>
                <a href={url}>View</a>
            </div>
            <div className={style.descriptionContainer}>
                <h3 className={style.title}>{title}</h3>
                <span className={style.description}>{description}</span>
            </div>
        </div>
    );
})
