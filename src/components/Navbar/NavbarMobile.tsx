import { useState } from 'react';
import styles from './NavbarMobile.module.css';
import { HomeIcon } from '../../../public/Icons/HomeIcon';
import { AboutIcon } from '../../../public/Icons/AboutIcon';
import { ExperienceIcon } from '../../../public/Icons/ExperienceIcon';
import { TechnologiesIcon } from '../../../public/Icons/TechnologiesIcon';
import { MenuIcon } from '../../../public/Icons/MenuIcon';
import { CloseIcon } from '../../../public/Icons/CloseIcon';
import { ContactIcon } from '../../../public/Icons/ContactIcon';
import { ProjectsIcon } from '../../../public/Icons/ProjectsIcon';
import { t } from 'i18next';
import { NavItem } from './NavItem';

export const NavbarMobile: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <div
            className={styles.buttonMobile}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            {!menuOpen && <MenuIcon color={`#FFFFFF`} width={`3rem`} />}
            {menuOpen && (
                <div
                    className={`${styles.navMobileOverlay} ${
                        menuOpen ? styles.open : ''
                    }`}
                >
                    <div className={styles.listMobile}>
                        <div>
                            <CloseIcon color={`#FFFFFF`} width={`3rem`} />
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <NavItem
                                        Icon={HomeIcon}
                                        label={t('Home')}
                                        href='/'
                                        width='1.5rem'
                                    />
                                </li>
                                <li>
                                    <NavItem
                                        Icon={AboutIcon}
                                        label={t('Sobre mí')}
                                        href='#about'
                                        width='1.5rem'
                                    />
                                </li>
                                <li>
                                    <NavItem
                                        Icon={ExperienceIcon}
                                        label={t('Experiencia')}
                                        href='#experience'
                                        width='1.5rem'
                                    />
                                </li>
                                <li>
                                    <NavItem
                                        Icon={TechnologiesIcon}
                                        label={t('Tecnologías')}
                                        href='#technologies'
                                        width='2.7rem'
                                    />
                                </li>
                                <li>
                                    <NavItem
                                        Icon={ProjectsIcon}
                                        label={t('Proyectos')}
                                        href='#projects'
                                        width='1.5rem'
                                    />
                                </li>
                                <li>
                                    <NavItem
                                        Icon={ContactIcon}
                                        label={t('Contacto')}
                                        href='#contact'
                                        width='1.5rem'
                                    />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
};
