import { t } from 'i18next';
import { ProjectProps } from '../../interfaces/interfaces';
import { capitalizeFirstLetter, getImageUrl } from '../../utils';
import styles from './WorkCard.module.css';

export const WorkCard: React.FC<ProjectProps> = ({ project }) => {
    const { title, description, skills, imageSrc, gitLinkFront, gitLinkBack } =
        project;

    return (
        <div
            className={styles.cardContent}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={styles.cardHeader}>
                <h3>{t(title)}</h3>
            </div>
            <div className={styles.cardBody}>
                <img
                    src={getImageUrl(imageSrc)}
                    alt={`Image of ${title}`}
                    className={styles.image}
                />
                <p className={styles.description}>{t(description)}</p>
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
                    {gitLinkBack && (
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
                    )}
                </div>
            </div>
            <ul className={styles.cardFooter}>
                {skills?.map((skill, id) => (
                    <li key={id} className={styles.skills}>
                        <img src={`https://skillicons.dev/icons?i=${skill}`} />
                        <p>{capitalizeFirstLetter(skill)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
