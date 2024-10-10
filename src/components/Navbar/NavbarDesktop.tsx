import styles from './NavbarDesktop.module.css';
import { HomeIcon } from '../../../public/Icons/HomeIcon';
import { AboutIcon } from '../../../public/Icons/AboutIcon';
import { ExperienceIcon } from '../../../public/Icons/ExperienceIcon';
import { TechnologiesIcon } from '../../../public/Icons/TechnologiesIcon';
import { ContactIcon } from '../../../public/Icons/ContactIcon';
import { ProjectsIcon } from '../../../public/Icons/ProjectsIcon';
import { t } from 'i18next';

export const NavbarDesktop: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <ul className={styles.menuItems}>
                    <li>
                        <div>
                            <HomeIcon color={`#5F73B0`} width={`1.2rem`} />
                            <a href='/'>{t(`Home`)}</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <AboutIcon color={`#5F73B0`} width={`1.2rem`} />
                            <a href='#about'>{t(`Sobre mí`)}</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <ExperienceIcon
                                color={`#5F73B0`}
                                width={`1.2rem`}
                            />
                            <a href='#experience'>{t(`Experiencia`)}</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <TechnologiesIcon
                                color={`#5F73B0`}
                                width={`1.2rem`}
                            />
                            <a href='#technologies'>{t(`Tecnologías`)}</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <ProjectsIcon color={`#5F73B0`} width={`1.1rem`} />
                            <a href='#projects'>{t(`Proyectos`)}</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <ContactIcon color={`#5F73B0`} width={`1.2rem`} />
                            <a href='#contact'>{t(`Contacto`)}</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
