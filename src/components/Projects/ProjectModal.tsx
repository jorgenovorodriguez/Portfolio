import React, { useEffect, useState } from 'react';
import styles from './ProjectModal.module.css';
import { capitalizeFirstLetter, getImageUrl } from '../../utils';
import { ProjectModalProps } from '../../interfaces/interfaces';
import { CloseIcon } from '../../../public/Icons/CloseIcon';

export const ProjectModal: React.FC<ProjectModalProps> = ({
    project,
    onClose,
    onPrevious,
    onNext,
}) => {
    const { title, description, skills, imageSrc, gitLinkFront, gitLinkBack } =
        project;

    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX !== null && touchEndX !== null) {
            const swipeDistance = touchStartX - touchEndX;

            if (swipeDistance > 50) {
                onNext();
            } else if (swipeDistance < -50) {
                onPrevious();
            }
        }

        setTouchStartX(null);
        setTouchEndX(null);
    };

    return (
        <div
            className={styles.modalOverlay}
            onClick={onClose}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modalHeader}>
                    <h3>{title}</h3>
                    <div className={styles.closeIcon} onClick={onClose}>
                        <CloseIcon color={`#a0a0a0`} width={`2rem`} />
                    </div>
                </div>
                <div className={styles.modalBody}>
                    <img
                        src={getImageUrl(imageSrc)}
                        alt={`Image of ${title}`}
                        className={styles.image}
                    />
                    <p className={styles.description}>{description}</p>
                    <div className={styles.links}>
                        <a
                            href={gitLinkFront}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={getImageUrl('projects/gitfront.png')}
                                className={styles.gitImg}
                            />
                        </a>

                        <a
                            href={gitLinkBack}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={getImageUrl('projects/gitback.png')}
                                className={styles.gitImg}
                            />
                        </a>
                    </div>
                </div>
                <ul className={styles.modalFooter}>
                    {skills.map((skill, id) => (
                        <li key={id} className={styles.skills}>
                            <img
                                src={`https://skillicons.dev/icons?i=${skill}`}
                            />
                            <p>{capitalizeFirstLetter(skill)}</p>
                        </li>
                    ))}
                </ul>
                <div
                    className={`${styles.navigationButton} ${styles.prevNavigation}`}
                    onClick={onPrevious}
                >
                    &lt;
                </div>
                <div
                    className={`${styles.navigationButton} ${styles.nextNavigation}`}
                    onClick={onNext}
                >
                    &gt;
                </div>
            </div>
        </div>
    );
};
