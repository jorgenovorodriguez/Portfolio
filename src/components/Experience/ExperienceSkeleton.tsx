import styles from './ExperienceSkeleton.module.css';

export const ExperienceSkeleton: React.FC = () => {
    return (
        <ol className={styles.history}>
            {[...Array(3)].map((_, index) => (
                <li key={index} className={styles.historyItem}>
                    <div className={styles.historyItemDot}></div>
                    <div className={styles.historyItemImgContainer}></div>
                    <div className={styles.historyItemDetails}>
                        <div className={styles.historyItemTitle}></div>
                        <div className={styles.historyItemRole}></div>
                        <div className={styles.historyItemDate}></div>
                        <div className={styles.historyItemExperience}></div>
                        <div className={styles.historyItemExperience}></div>
                        <div className={styles.historyItemExperience}></div>
                        <div className={styles.historyItemLink}></div>
                    </div>
                </li>
            ))}
        </ol>
    );
};
