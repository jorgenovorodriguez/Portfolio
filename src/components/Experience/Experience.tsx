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
    const [data, setData] = useState<ExperienceData[]>();
    const [loading, setLoading] = useState<boolean>(true);

    const gradhocReference =
        'https://drive.google.com/file/d/1EzbGO6_NWo6_PD8Np_WjSxYSUf4RZUCp/view?usp=sharing';

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const experienceData = await getExperienceData();

                const updatedData = experienceData.map((item) => {
                    if (item.id === 1) {
                        return { ...item, referenceLink: gradhocReference };
                    }
                    return item;
                });

                setData(updatedData);
            } catch (err) {
                console.error(err);
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
                                        {historyItem?.referenceLink && (
                                            <a
                                                href={
                                                    historyItem?.referenceLink
                                                }
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                {t(`Referencias`)}
                                            </a>
                                        )}
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
