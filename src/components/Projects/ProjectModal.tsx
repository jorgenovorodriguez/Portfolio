import React, { useEffect } from 'react';
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
    const { title, description, skills, gitLinkFront, gitLinkBack } = project;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.closeIcon} onClick={onClose}>
                    <CloseIcon color={`#a0a0a0`} width={`2rem`} />
                </div>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.links}>
                    <a
                        href={gitLinkFront}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Github
                    </a>
                    <a
                        href={gitLinkBack}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Github
                    </a>
                </div>
                <ul>
                    {skills.map((skill, id) => (
                        <li key={id} className={styles.skills}>
                            <img
                                src={`https://skillicons.dev/icons?i=${skill},line=12`}
                            />
                            {/*                <p>{capitalizeFirstLetter(skill)}</p> */}
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
