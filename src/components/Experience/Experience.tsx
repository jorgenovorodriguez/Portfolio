// eslint-disable-next-line no-unused-vars
import React from 'react';

import styles from './Experience.module.css';
import { getImageUrl, redirectToWebsite } from '../../utils';
import history from '../../data/history.json';

export const Experience: React.FC = () => {
    return (
        <section className={styles.container} id='experience'>
            <h2 className={styles.title}>{`Experiencia`}</h2>
            <div className={styles.content}>
                <ol className={styles.history}>
                    {history.map((historyItem, id) => {
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
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map(
                                            (experience, id) => {
                                                return (
                                                    <li key={id}>
                                                        {experience}
                                                    </li>
                                                );
                                            }
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
