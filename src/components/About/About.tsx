import React from 'react';

import styles from './About.module.css';
import { getImageUrl, redirectToWebsite } from '../../utils';

const cvUrl =
    'https://drive.google.com/file/d/18j1xN8gShz8PIoQRHEdU_0KQG5Ytx6Cr/view?usp=sharing';

export const About: React.FC = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>{`Sobre mí`}</h2>
            <div className={styles.content}>
                <div className={styles.aboutItems}>
                    <div className={styles.aboutItem}>
                        <div>
                            <p>{`Partiendo de la base de HTML, CSS Y JavaScript me especializado en la creación de aplicaciones con React. Me considero una persona autodidacta y comprometida, con capacidad para el aprendizaje y el trabajo en equipo. `}</p>
                            <br />
                            <p>{`Si quieres saber más no dudes en descargar mi currículum`}</p>
                        </div>
                    </div>
                    <div
                        className={styles.aboutItemButton}
                        onClick={() => redirectToWebsite(cvUrl)}
                    >
                        <img
                            src={getImageUrl('about/cursorIcon.png')}
                            alt='Cursor icon'
                        />
                        <p>{`Descargar Cv`}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
