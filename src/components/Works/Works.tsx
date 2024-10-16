import React, { useEffect, useRef, useState } from 'react';

import styles from './Works.module.css';
import { ProjectData } from '../../interfaces/interfaces';
import { t } from 'i18next';
import { WorkCard } from './WorkCard';
import { getProjectsData } from '../../services/apiServices';
import { WorkCardSkeleton } from './WorkCardSkeleton';

export const Works = () => {
    const [data, setData] = useState<ProjectData[]>();
    const [loading, setLoading] = useState<boolean>(true);
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

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const projectsData = await getProjectsData();
                setData(projectsData);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

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
