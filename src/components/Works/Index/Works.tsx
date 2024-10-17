import React, { useEffect, useRef, useState } from 'react';

import styles from './Works.module.css';
import { ProjectData } from '../../../interfaces/interfaces';
import { t } from 'i18next';
import { WorkCard } from '../Item/WorkCard';
import { getProjectsData } from '../../../services/apiServices';
import { WorkCardSkeleton } from '../Skeleton/WorkCardSkeleton';
import { NavigationButton } from '../utils/NavigationButton';
import { useError } from '../../../contexts/ErrorContext';

const Works: React.FC = () => {
    const [data, setData] = useState<ProjectData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { setError } = useError();
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
                setError(t('Error al obtener los proyectos'));
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

export default Works;
