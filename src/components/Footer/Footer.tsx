import React from 'react';

import styles from './Footer.module.css';
import { getImageUrl } from '../../utils';

export const Footer = () => {
    return (
        <footer id='contact' className={styles.container}>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/emailIcon.png')}
                        alt='Email icon'
                    />
                    <a href='mailto:jorge.novo.rodriguez.93@gmail.com'>
                        jorge.novo.rodriguez.93@gmail.com
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/linkedinIcon.png')}
                        alt='LinkedIn icon'
                    />
                    <a href='https://www.linkedin.com/in/jorgenovorodriguez/'>
                        linkedin.com/in/jorgenovorodriguez
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl('contact/githubIcon.png')}
                        alt='Github icon'
                    />
                    <div>
                        <a href='https://github.com/jorgenovorodriguez'>
                            github.com/jorgenovorodriguez
                        </a>
                        <a href='https://github.com/gradhoc-jnovo'>
                            github.com/gradhoc-jnovo
                        </a>
                    </div>
                </li>
            </ul>
        </footer>
    );
};
