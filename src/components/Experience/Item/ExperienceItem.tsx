import React from 'react';
import styles from './ExperienceItem.module.css';
import {
    formatDateToMonthYear,
    getImageUrl,
    redirectToWebsite,
} from '../../../utils';
import { t } from 'i18next';
import { ExperienceData } from '../../../interfaces/interfaces';

const ExperienceItem: React.FC<{ item: ExperienceData }> = ({ item }) => (
    <li className={styles.historyItem}>
        <div className={styles.historyItemDot}></div>

        <div
            className={styles.historyItemImgContainer}
            onClick={() => redirectToWebsite(item.link)}
        >
            <img
                src={getImageUrl(item.imageSrc)}
                alt={`${item.organisation} Logo`}
            />
        </div>

        <div className={styles.historyItemDetails}>
            <h3>{item.organisation}</h3>
            <h4>{item.role},</h4>
            <p>{`${formatDateToMonthYear(
                item.startDate
            )} - ${formatDateToMonthYear(item.endDate)}`}</p>
            <ul>
                <li>{item.experiences}</li>
                {item.referenceLink && (
                    <a
                        href={item.referenceLink}
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

export default ExperienceItem;
