import React, { useState } from 'react';

import styles from './Footer.module.css';
import { t } from 'i18next';
import { getImageUrl } from '../../utils';
import { Modal } from '../Modal/Modal';
import { FooterLinkProps } from '../../interfaces/interfaces';
import {
    FOOTER_C,
    FOOTER_POLICY_LABEL,
    HOME_MAIL,
    POLICY_TEXT,
} from '../../content/texts';
import {
    GITHUB_ORGANIZATION_LINK,
    GITHUB_PERSONAL_LINK,
    LINKEDIN_LINK,
} from '../../content/links';

const FooterLink: React.FC<FooterLinkProps> = ({
    iconSrc,
    altText,
    text,
    href,
}) => (
    <li className={styles.link}>
        <img src={getImageUrl(iconSrc)} alt={altText} />
        {href ? (
            <a href={href} target='_blank' rel='noopener noreferrer'>
                <p className={styles.text}>{text}</p>
            </a>
        ) : (
            <span>{text}</span>
        )}
    </li>
);

export const Footer: React.FC = () => {
    const [openPolicy, setOpenPolicy] = useState(false);

    const handleOpenPolicy = () => setOpenPolicy(true);
    const handleClosePolicy = () => setOpenPolicy(false);

    return (
        <footer id='contact' className={styles.container}>
            <ul className={styles.links}>
                <FooterLink
                    iconSrc='contact/emailIcon.png'
                    altText='Email icon'
                    text={HOME_MAIL}
                    href={HOME_MAIL}
                />
                <FooterLink
                    iconSrc='contact/linkedinIcon.png'
                    altText='LinkedIn icon'
                    text='linkedin.com/in/jorgenovorodriguez'
                    href={LINKEDIN_LINK}
                />
                <FooterLink
                    iconSrc='contact/githubIcon.png'
                    altText='Github icon'
                    text='github.com/jorgenovorodriguez'
                    href={GITHUB_PERSONAL_LINK}
                />
                <FooterLink
                    iconSrc='contact/githubIcon.png'
                    altText='Github icon'
                    text='github.com/gradhoc-jnovo'
                    href={GITHUB_ORGANIZATION_LINK}
                />
            </ul>
            <div className={styles.bottom}>
                <div>
                    <p>{FOOTER_C}</p>
                </div>
                <div className={styles.linkable} onClick={handleOpenPolicy}>
                    <p>{t(FOOTER_POLICY_LABEL)}</p>
                </div>
            </div>
            {openPolicy && (
                <Modal text={t(POLICY_TEXT)} onClose={handleClosePolicy} />
            )}
        </footer>
    );
};
