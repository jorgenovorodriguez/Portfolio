import React, { useState } from 'react';

import styles from './Projects.module.css';
import projects from '../../data/projects.json';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '../../interfaces/interfaces';
import { t } from 'i18next';

export const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<
        number | null
    >(null);

    const handleCardClick = (index: number): void => {
        setSelectedProjectIndex(index);
    };

    const closeModal = (): void => {
        setSelectedProjectIndex(null);
    };

    const handlePrevious = (): void => {
        setSelectedProjectIndex((prevIndex) =>
            prevIndex !== null && prevIndex > 0
                ? prevIndex - 1
                : projects.length - 1
        );
    };

    const handleNext = (): void => {
        setSelectedProjectIndex((prevIndex) =>
            prevIndex !== null && prevIndex < projects.length - 1
                ? prevIndex + 1
                : 0
        );
    };

    return (
        <section className={styles.container} id='projects'>
            <h2 className={styles.title}>{t('Proyectos')}</h2>
            <div className={styles.projects}>
                {projects.map((project: Project, id: number) => (
                    <div
                        key={id}
                        onClick={() => handleCardClick(id)}
                        className={styles.card}
                    >
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
            {selectedProjectIndex !== null && (
                <ProjectModal
                    project={projects[selectedProjectIndex]}
                    onClose={closeModal}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                />
            )}
        </section>
    );
};
