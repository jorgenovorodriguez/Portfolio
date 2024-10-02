import React, { useEffect, useState } from 'react';

import styles from './Experience.module.css';
import {
    formatDateToMonthYear,
    getImageUrl,
    redirectToWebsite,
} from '../../utils';
import { t } from 'i18next';

import { getExperienceData } from '../../services/apiServices';
import { ExperienceData } from '../../interfaces/interfaces';

export const Experience: React.FC = () => {
    const [data, setData] = useState<ExperienceData[]>([]);
    console.log(data);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const experienceData = await getExperienceData();
                setData(experienceData);
            } catch (err) {
                setError('Error al cargar los datos');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <section className={styles.container} id='experience'>
            <h2 className={styles.title}>{t(`Experiencia`)}</h2>
            <div className={styles.content}>
                <ol className={styles.history}>
                    {data?.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <div className={styles.historyItemDot}></div>

                                <div
                                    className={styles.historyItemImgContainer}
                                    onClick={() =>
                                        redirectToWebsite(historyItem.link)
                                    }
                                >
                                    <img
                                        src={getImageUrl(historyItem.imageSrc)}
                                        alt={`${historyItem.organisation} Logo`}
                                    />
                                </div>

                                <div className={styles.historyItemDetails}>
                                    <h3>{` ${historyItem.organisation}`}</h3>
                                    <h4>{`${historyItem.role}`},</h4>
                                    <p>{`${formatDateToMonthYear(
                                        historyItem.startDate
                                    )} - ${formatDateToMonthYear(
                                        historyItem.endDate
                                    )}`}</p>
                                    <ul>
                                        <li key={id}>
                                            {historyItem.experiences}
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
};
