import React from 'react';
import styles from './About.module.css';
import { getImageUrl, redirectToWebsite } from '../../utils';
import { t } from 'i18next';
import { ABOUT_TEXT_1, ABOUT_TEXT_2, ABOUT_TEXT_3 } from '../../content/texts';
import { ABOUT_CV_LINK } from '../../content/links';
import { useError } from '../../contexts/ErrorContext';

const AboutParagraphs: React.FC<{ texts: string[] }> = ({ texts }) => (
    <>
        {texts.map((text, index) => (
            <p key={index}>{t(text)}</p>
        ))}
    </>
);

const DownloadButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div className={styles.aboutItemButton} onClick={onClick}>
        <img src={getImageUrl('about/cursorIcon.png')} alt='Cursor icon' />
        <p className='text-gradient'>{t(`Descargar Cv`)}</p>
    </div>
);

const About: React.FC = () => {
    const aboutTexts = [ABOUT_TEXT_1, ABOUT_TEXT_2, ABOUT_TEXT_3];

    const { setError } = useError();

    const handleRedirect = () => {
        const success = redirectToWebsite(ABOUT_CV_LINK);
        if (!success) {
            setError(t('Error al abrir el enlace'));
        }
    };

    return (
        <section className={styles.container} id='about'>
            <h2 className={`${styles.title} text-gradient`}>{t(`Sobre mí`)}</h2>
            <div className={styles.aboutItems}>
                <div className={styles.aboutItem}>
                    <AboutParagraphs texts={aboutTexts} />
                </div>
                <DownloadButton onClick={handleRedirect} />
            </div>
        </section>
    );
};

export default About;
