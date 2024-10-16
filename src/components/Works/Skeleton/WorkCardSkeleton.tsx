import styles from './WorkCardSkeleton.module.css';

export const WorkCardSkeleton: React.FC = () => {
    return (
        <div className={styles.skeletonCard}>
            <div className={styles.header}></div>
            <div className={styles.image}></div>
            <div className={styles.description}></div>
            <div className={styles.description}></div>
            <div className={styles.description}></div>
            <div className={styles.description}></div>
            <div className={styles.links}>
                <div className={styles.link}></div>
                <div className={styles.link}></div>
            </div>
            <div className={styles.footer}>
                <div className={styles.skill}></div>
                <div className={styles.skill}></div>
                <div className={styles.skill}></div>
            </div>
        </div>
    );
};
