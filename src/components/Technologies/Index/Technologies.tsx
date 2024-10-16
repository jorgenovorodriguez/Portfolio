import React from 'react';
import styles from './Technologies.module.css';
import skills from '../../../data/skills.json';
import { getImageUrl } from '../../../utils';
import { t } from 'i18next';
import { WebIcon } from '../../../../public/Icons/WebIcon';
import { TimeIcon } from '../../../../public/Icons/TimeIcon';
import { DesignIcon } from '../../../../public/Icons/DesignIcon';
import { ServerIcon } from '../../../../public/Icons/ServerIcon';
import { VersionIcon } from '../../../../public/Icons/VersionIcon';
import { DocIcon } from '../../../../public/Icons/DocIcon';
import {
    TECH_TEXT_1,
    TECH_TEXT_2,
    TECH_TEXT_3,
    TECH_TEXT_4,
    TECH_TEXT_5,
    TECH_TEXT_6,
} from '../../../content/texts';
import { TechItem } from '../Item/TechItem';

const techItems = [
    {
        icon: <WebIcon color='#5F73B0' width='1.7rem' />,
        title: 'Desarrollo de FrontEnd:',
        text: TECH_TEXT_1,
    },
    {
        icon: <TimeIcon color='#5F73B0' width='1.7rem' />,
        title: 'Tecnologías en Tiempo Real:',
        text: TECH_TEXT_2,
    },
    {
        icon: <DesignIcon color='#5F73B0' width='1.7rem' />,
        title: 'Diseño y Prototipado:',
        text: TECH_TEXT_3,
    },
    {
        icon: <ServerIcon color='#5F73B0' width='1.7rem' />,
        title: 'Desarrollo BackEnd:',
        text: TECH_TEXT_4,
    },
    {
        icon: <VersionIcon color='#5F73B0' width='1.7rem' />,
        title: 'Control de Versiones:',
        text: TECH_TEXT_5,
    },
    {
        icon: <DocIcon color='#5F73B0' width='1.7rem' />,
        title: 'Documentación de Tareas:',
        text: TECH_TEXT_6,
    },
];

export const Technologies: React.FC = () => {
    const SkillsCarousel = () => {
        return skills.map((skill, index) => (
            <div key={skill.title} className={styles.carouselItem}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
        ));
    };
    return (
        <section id='technologies' className={styles.technologies}>
            <div className={styles.container}>
                <h2 className={`${styles.title} text-gradient`}>
                    {t('Tecnologías')}
                </h2>
                <ul className={styles.techItems}>
                    {techItems.map((item, index) => (
                        <TechItem
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </ul>
            </div>
            <div className={styles.carouselContainer}>
                <div className={styles.carousel}>
                    {SkillsCarousel()}
                    {SkillsCarousel()}
                </div>
            </div>
        </section>
    );
};
