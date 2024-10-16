import React, { useEffect, useRef, useState } from 'react';

import styles from './Works.module.css';
import {
    NavigationButtonProps,
    ProjectData,
} from '../../interfaces/interfaces';
import { t } from 'i18next';
import { WorkCard } from './WorkCard';
import { getProjectsData } from '../../services/apiServices';
import { WorkCardSkeleton } from './WorkCardSkeleton';

const NavigationButton: React.FC<NavigationButtonProps> = ({
    direction,
    onClick,
    hidden,
}) => (
    <div
        className={`${styles.navigationButton} ${hidden ? styles.hidden : ''} ${
            direction === 'left' ? styles.prevNavigation : styles.nextNavigation
        }`}
        onClick={onClick}
    >
        {direction === 'left' ? '<' : '>'}
    </div>
);

export const Works: React.FC = () => {
    const [data, setData] = useState<ProjectData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const projectsRef = useRef<HTMLDivElement>(null);
    const scrollAmount = 300;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const projectsData = await getProjectsData();
                setData(projectsData);
                setCurrentIndex(0);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const scrollLeft = () => {
        if (currentIndex > 0) {
            if (projectsRef.current) {
                projectsRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth',
                });
                setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
            }
        }
    };

    const scrollRight = () => {
        if (currentIndex < data.length - 1) {
            if (projectsRef.current) {
                projectsRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth',
                });
                setCurrentIndex((prevIndex) =>
                    Math.min(prevIndex + 1, data.length - 1)
                );
            }
        }
    };

    return (
        <div className={styles.preContainer}>
            <section className={styles.container} id='projects'>
                <h2 className={`${styles.title} text-gradient`}>
                    {t('Proyectos')}
                </h2>
                <div className={styles.projects} ref={projectsRef}>
                    {loading ? (
                        <div className={styles.card}>
                            <WorkCardSkeleton />
                        </div>
                    ) : (
                        data?.map((project: ProjectData, id: number) => (
                            <div key={id} className={styles.card}>
                                <WorkCard project={project} />
                            </div>
                        ))
                    )}
                </div>
            </section>
            <NavigationButton
                direction='left'
                onClick={scrollLeft}
                hidden={currentIndex === 0}
            />
            <NavigationButton
                direction='right'
                onClick={scrollRight}
                hidden={currentIndex === data.length - 1}
            />
        </div>
    );
};
