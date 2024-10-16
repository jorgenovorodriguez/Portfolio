import styles from './NavbarDesktop.module.css';
import { HomeIcon } from '../../../public/Icons/HomeIcon';
import { AboutIcon } from '../../../public/Icons/AboutIcon';
import { ExperienceIcon } from '../../../public/Icons/ExperienceIcon';
import { TechnologiesIcon } from '../../../public/Icons/TechnologiesIcon';
import { ContactIcon } from '../../../public/Icons/ContactIcon';
import { ProjectsIcon } from '../../../public/Icons/ProjectsIcon';
import { t } from 'i18next';
import { NavItem } from './NavItem';

export const NavbarDesktop: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <ul className={styles.menuItems}>
                    <li>
                        <NavItem Icon={HomeIcon} label={t('Home')} href='/' />
                    </li>
                    <li>
                        <NavItem
                            Icon={AboutIcon}
                            label={t('Sobre mí')}
                            href='#about'
                        />
                    </li>
                    <li>
                        <NavItem
                            Icon={ExperienceIcon}
                            label={t('Experiencia')}
                            href='#experience'
                        />
                    </li>
                    <li>
                        <NavItem
                            Icon={TechnologiesIcon}
                            label={t('Tecnologías')}
                            href='#technologies'
                        />
                    </li>
                    <li>
                        <NavItem
                            Icon={ProjectsIcon}
                            label={t('Proyectos')}
                            href='#projects'
                            width='1.1rem'
                        />
                    </li>
                    <li>
                        <NavItem
                            Icon={ContactIcon}
                            label={t('Contacto')}
                            href='#contact'
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
};
