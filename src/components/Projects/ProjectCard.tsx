import React, { useState } from 'react';

import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';
import { ProjectCardData, ProjectCardProps } from '../../interfaces/interfaces';

export const ProjectCard: React.FC<ProjectCardProps> = ({
    project: { title, imageSrc },
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img
                    src={getImageUrl(imageSrc)}
                    alt={`Image of ${title}`}
                    className={styles.image}
                />
            </div>
            <h3 className={styles.title}>{title}</h3>
        </div>
    );
};
