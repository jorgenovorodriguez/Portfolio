import React from 'react';

import styles from './Home.module.css';
import { getImageUrl, redirectToWebsite, copyText } from '../../utils';
import { LInkedinIcon } from '../../../public/Icons/LInkedinIcon';
import { t } from 'i18next';
import { CopyIcon } from '../../../public/Icons/CopyIcon';

export const Home: React.FC = () => {
    const homeImage: string = 'home/homeImage.png';
    const texto = 'jorge.novo.rodriguez.93@gmail.com';

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{t(`Hola, soy Jorge.`)}</h1>
                <p className={styles.description}>
                    {t(`Desarrollador de FrontEnd`)}
                </p>
                <div className={styles.copyMail}>
                    <p
                        data-tooltip={
                            t(
                                `Ese es mi email, puedes escribirme cuando quieras.`
                            ) +
                            ' ' +
                            '😉'
                        }
                    >
                        {texto}
                    </p>
                    <div onClick={() => copyText(texto)}>
                        <CopyIcon color='white' width='1.2rem' />{' '}
                    </div>
                </div>
                <div
                    className={styles.linkedinIcon}
                    onClick={() =>
                        redirectToWebsite(
                            'https://www.linkedin.com/in/jorgenovorodriguez/'
                        )
                    }
                >
                    <LInkedinIcon color='white' width='4rem' />
                </div>
            </div>
            <img src={getImageUrl(homeImage)} className={styles.heroImg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
