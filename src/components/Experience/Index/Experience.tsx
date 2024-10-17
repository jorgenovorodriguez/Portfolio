import React from 'react';
import styles from './Experience.module.css';
import { t } from 'i18next';
import { ExperienceSkeleton } from '../Skeleton/ExperienceSkeleton';
import ExperienceItem from '../Item/ExperienceItem';
import useExperiences from '../../../hooks/useExperiences';

const Experience: React.FC = () => {
    const { experiences, loading } = useExperiences();

    return (
        <section className={styles.container} id='experience'>
            <h2 className={`${styles.title} text-gradient`}>
                {t(`Experiencia`)}
            </h2>
            <div className={styles.content}>
                <ol className={styles.history}>
                    {loading ? (
                        <ExperienceSkeleton />
                    ) : (
                        experiences.map((historyItem) => (
                            <ExperienceItem
                                key={historyItem.id}
                                item={historyItem}
                            />
                        ))
                    )}
                </ol>
            </div>
        </section>
    );
};

export default Experience;
