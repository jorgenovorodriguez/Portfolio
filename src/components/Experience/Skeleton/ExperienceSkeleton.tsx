import styles from './ExperienceSkeleton.module.css';

export const ExperienceSkeleton: React.FC = () => {
    const experienceItems = [...Array(3)];
    const experiencesLines = [...Array(7)];

    return (
        <ol className={styles.history}>
            {experienceItems.map((_, index) => (
                <li key={index} className={styles.historyItem}>
                    <div className={styles.historyItemDot}></div>
                    <div className={styles.historyItemImgContainer}></div>
                    <div className={styles.historyItemDetails}>
                        {experiencesLines.map((_, experienceIndex) => (
                            <div
                                key={experienceIndex}
                                className={styles.historyItemExperience}
                            />
                        ))}
                    </div>
                </li>
            ))}
        </ol>
    );
};
