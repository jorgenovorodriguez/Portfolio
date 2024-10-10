import React, { useRef } from 'react';

import styles from './Works.module.css';
import projects from '../../data/projects.json';
import { Project } from '../../interfaces/interfaces';
import { t } from 'i18next';
import { WorkCard } from './WorkCard';

export const Works = () => {
    const projectsRef = useRef<HTMLDivElement>(null);
    const scrollAmount = 300;

    const scrollLeft = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className={styles.preContainer}>
            <section className={styles.container} id='projects'>
                <h2 className={`${styles.title} text-gradient`}>
                    {t('Proyectos')}
                </h2>
                <div className={styles.projects} ref={projectsRef}>
                    {projects.map((project: Project, id: number) => (
                        <div key={id} className={styles.card}>
                            <WorkCard project={project} />
                        </div>
                    ))}
                </div>
            </section>
            <div
                className={`${styles.navigationButton} ${styles.prevNavigation}`}
                onClick={scrollLeft}
            >
                &lt;
            </div>
            <div
                className={`${styles.navigationButton} ${styles.nextNavigation}`}
                onClick={scrollRight}
            >
                &gt;
            </div>
        </div>
    );
};
