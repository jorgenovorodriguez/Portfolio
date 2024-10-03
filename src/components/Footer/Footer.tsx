import React, { useState } from 'react';

import styles from './Footer.module.css';
import { getImageUrl } from '../../utils';
import { Modal } from '../Modal/Modal';
import { POLICY_TEXT } from '../../content/texts';
import { t } from 'i18next';

export const Footer = () => {
    const [openPolicy, setOpenPolicy] = useState(false);

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
            <div className={styles.bottom}>
                <div>
                    <p>© 2024 Jorge Novo Rodríguez</p>
                </div>
                <div
                    className={styles.linkable}
                    onClick={() => setOpenPolicy(true)}
                >
                    <p>{t(`Política de privacidad`)}</p>
                </div>
            </div>
            {openPolicy && (
                <Modal
                    text={t(POLICY_TEXT)}
                    onClose={() => setOpenPolicy(false)}
                />
            )}
        </footer>
    );
};
