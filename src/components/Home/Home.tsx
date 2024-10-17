import React from 'react';

import styles from './Home.module.css';
import { getImageUrl, redirectToWebsite, copyText } from '../../utils';
import { LInkedinIcon } from '../../../public/Icons/LInkedinIcon';
import { t } from 'i18next';
import { CopyIcon } from '../../../public/Icons/CopyIcon';
import {
    HOME_DESCRIPTION,
    HOME_HI,
    HOME_MAIL,
    HOME_MAIL_TOOLTIP,
} from '../../content/texts';
import { LINKEDIN_LINK } from '../../content/links';
import { toast } from 'react-toastify';
import { useError } from '../../contexts/ErrorContext';

const EmailCopy: React.FC = () => {
    const { setError } = useError();

    const handleCopy = async () => {
        const success = await copyText(HOME_MAIL);
        if (!success) {
            setError(t('Error al copiar el texto'));
        } else {
            toast.info(t('Email guardado en el portapapeles'));
        }
    };

    return (
        <div className={styles.copyMail}>
            <p data-tooltip={`${t(HOME_MAIL_TOOLTIP)} 😉`}>{HOME_MAIL}</p>
            <div onClick={handleCopy}>
                <CopyIcon color='white' width='1.2rem' />
            </div>
        </div>
    );
};

const LinkedInButton: React.FC = () => {
    const { setError } = useError();

    const handleRedirect = () => {
        const success = redirectToWebsite(LINKEDIN_LINK);
        if (!success) {
            setError(t('Error al abrir el enlace'));
        }
    };
    return (
        <div className={styles.linkedinIcon} onClick={handleRedirect}>
            <LInkedinIcon color='white' width='4rem' />
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{t(HOME_HI)}</h1>
                <p className={styles.description}>{t(HOME_DESCRIPTION)}</p>
                <EmailCopy />
                <LinkedInButton />
            </div>
            <img
                src={getImageUrl('home/homeImage.png')}
                className={styles.heroImg}
                alt='Home Image'
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};

export default Home;
