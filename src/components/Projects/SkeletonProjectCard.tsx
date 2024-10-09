import React from 'react';
import styles from './SkeletonProjectCard.module.css';

export const SkeletonCard = () => {
    return (
        <div className={styles.skeletonContainer}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.skeletonTitle}></div>
        </div>
    );
};
