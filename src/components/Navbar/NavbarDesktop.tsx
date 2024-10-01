import styles from './NavbarDesktop.module.css';
import { HomeIcon } from '../../../public/Icons/HomeIcon';
import { AboutIcon } from '../../../public/Icons/AboutIcon';
import { ExperienceIcon } from '../../../public/Icons/ExperienceIcon';
import { TechnologiesIcon } from '../../../public/Icons/TechnologiesIcon';
import { ContactIcon } from '../../../public/Icons/ContactIcon';

export const NavbarDesktop: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.menu}>
                <ul className={styles.menuItems}>
                    <li>
                        <div>
                            <HomeIcon color={`#5F73B0`} width={`1.2rem`} />
                            <a href='/'>{`Home`}</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <AboutIcon color={`#5F73B0`} width={`1.2rem`} />
                            <a href='#about'>{`Sobre mí`}</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <ExperienceIcon
                                color={`#5F73B0`}
                                width={`1.2rem`}
                            />
                            <a href='#experience'>{`Experiencia`}</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <TechnologiesIcon
                                color={`#5F73B0`}
                                width={`1.2rem`}
                            />
                            <a href='#technologies'>{`Tecnologías`}</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <ContactIcon color={`#5F73B0`} width={`1.2rem`} />
                            <a href='#contact'>{`Contacto`}</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
