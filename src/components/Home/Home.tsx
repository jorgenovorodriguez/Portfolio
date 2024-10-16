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

const EmailCopy: React.FC = () => (
    <div className={styles.copyMail}>
        <p data-tooltip={`${t(HOME_MAIL_TOOLTIP)} 😉`}>{HOME_MAIL}</p>
        <div onClick={() => copyText(HOME_MAIL)}>
            <CopyIcon color='white' width='1.2rem' />
        </div>
    </div>
);

const LinkedInButton: React.FC = () => (
    <div
        className={styles.linkedinIcon}
        onClick={() => redirectToWebsite(LINKEDIN_LINK)}
    >
        <LInkedinIcon color='white' width='4rem' />
    </div>
);

export const Home: React.FC = () => {
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
