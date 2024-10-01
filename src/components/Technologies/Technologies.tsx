import React, { useEffect, useState } from 'react';
import styles from './Technologies.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';
import { t } from 'i18next';

export const Technologies: React.FC = () => {
    return (
        <section id='technologies'>
            <div className={styles.container}>
                <h2>{t(`Tecnologías`)}</h2>
                <p>
                    {t(
                        `Mi área principal de especialización es el desarrollo Frontend pero mi formación es FullStack.`
                    )}
                </p>
                <br />
                <p>
                    {t(
                        `Creación de aplicaciones web con React y Vite, gestión de estados globales con Redux Toolkit y tipado con TypeScript. Gestión de la información en tiempo real con WebSockets. Diseño responsive con CSS y uso de frameworks y librerías como Tailwind, Bootstrap o Mui. Creación de prototipos basados en principios UX/UI con Figma. Manejo de Backend con Node y Express, bases de datos con MySql, conocimientos de API REST. Control de versiones con Git.`
                    )}
                </p>
            </div>
            <div className={styles.carouselContainer}>
                <div className={styles.carousel}>
                    {skills.map((skill, index) => (
                        <div key={index} className={styles.carouselItem}>
                            <img
                                src={getImageUrl(skill.imageSrc)}
                                alt={skill.title}
                            />
                        </div>
                    ))}
                    {skills.map((skill, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className={styles.carouselItem}
                        >
                            <img
                                src={getImageUrl(skill.imageSrc)}
                                alt={skill.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
