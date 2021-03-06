import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import photo from '../../assets/images/photo.jpg'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

export const Main = React.memo(() => {
    const particlesInit = async (main: any) => {
        await loadFull(main);
    }
    return (
        <div className={`${styleContainer.block} ${style.mainBlock}`} id={'main'}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: {
                        zIndex: 0
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 100,
                            max: 300,
                        },
                        opacity: {
                            value: 0.7,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: {min: 1, max: 3},
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className={styleContainer.container}>

                <div className={style.content}>
                    <span>Hello there,</span>
                    <h1>I'm Anton Rybakou</h1>
                    <p>Front-end developer</p>
                </div>
                <div className={style.photo}>
                    <img src={photo} alt={'myPhoto'}/>
                </div>
            </div>
        </div>
    );
})
