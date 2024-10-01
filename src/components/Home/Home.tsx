import React from 'react';

import styles from './Home.module.css';
import { getImageUrl, redirectToWebsite } from '../../utils';
import { LInkedinIcon } from '../../Icons/LInkedinIcon';

export const Home: React.FC = () => {
    const homeImage: string = 'hero/heroImage.png';

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{`Hola, soy Jorge`}</h1>
                <p className={styles.description}>{`FrontEnd Developer`}</p>
                <div
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
