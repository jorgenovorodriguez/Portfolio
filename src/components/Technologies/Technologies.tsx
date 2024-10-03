import React, { useEffect, useState } from 'react';
import styles from './Technologies.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';
import { t } from 'i18next';
import { TECHNOLOGIES_TEXT_2 } from '../../content/texts';

export const Technologies: React.FC = () => {
    return (
        <section id='technologies'>
            <div className={styles.container}>
                <h2>{t(`Tecnologías`)}</h2>
                <p>{t(TECHNOLOGIES_TEXT_2)}</p>
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
