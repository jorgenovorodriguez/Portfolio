import React from 'react';
import styles from './About.module.css';
import { getImageUrl, redirectToWebsite } from '../../utils';
import { t } from 'i18next';
import {
    ABOUT_CV_LINK,
    ABOUT_TEXT_1,
    ABOUT_TEXT_2,
    ABOUT_TEXT_3,
} from '../../content/texts';

export const About: React.FC = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={`${styles.title} text-gradient`}>{t(`Sobre mí`)}</h2>
            <div className={styles.content}>
                <div className={styles.aboutItems}>
                    <div className={styles.aboutItem}>
                        <div>
                            <p>{t(ABOUT_TEXT_1)}</p>
                            <br />
                            <p>{t(ABOUT_TEXT_2)}</p>
                            <br />
                            <p>{t(ABOUT_TEXT_3)}</p>
                        </div>
                    </div>
                    <div
                        className={styles.aboutItemButton}
                        onClick={() => redirectToWebsite(ABOUT_CV_LINK)}
                    >
                        <img
                            src={getImageUrl('about/cursorIcon.png')}
                            alt='Cursor icon'
                        />
                        <p className='text-gradient'>{t(`Descargar Cv`)}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
