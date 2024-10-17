import React from 'react';
import styles from './About.module.css';
import { getImageUrl, redirectToWebsite } from '../../utils';
import { t } from 'i18next';
import { ABOUT_TEXT_1, ABOUT_TEXT_2, ABOUT_TEXT_3 } from '../../content/texts';
import { useError } from '../../contexts/ErrorContext';
import { getPdf } from '../../services/apiServices';
import { toast } from 'react-toastify';

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

    const handleDownload = async () => {
        try {
            await getPdf();
            toast.success(t('Documento descargado'));
        } catch (error) {
            setError(t('Error al descargar el documento'));
        }
    };

    return (
        <section className={styles.container} id='about'>
            <h2 className={`${styles.title} text-gradient`}>{t(`Sobre mí`)}</h2>
            <div className={styles.aboutItems}>
                <div className={styles.aboutItem}>
                    <AboutParagraphs texts={aboutTexts} />
                </div>
                <DownloadButton onClick={handleDownload} />
            </div>
        </section>
    );
};

export default About;
