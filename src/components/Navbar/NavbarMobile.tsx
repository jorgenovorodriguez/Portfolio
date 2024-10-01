import { useState } from 'react';
import styles from './NavbarMobile.module.css';
import { HomeIcon } from '../../../public/Icons/HomeIcon';
import { AboutIcon } from '../../../public/Icons/AboutIcon';
import { ExperienceIcon } from '../../../public/Icons/ExperienceIcon';
import { TechnologiesIcon } from '../../../public/Icons/TechnologiesIcon';
import { MenuIcon } from '../../../public/Icons/MenuIcon';
import { CloseIcon } from '../../../public/Icons/CloseIcon';
import { ContactIcon } from '../../../public/Icons/ContactIcon';

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
                                    <div>
                                        <HomeIcon
                                            color={`#5F73B0`}
                                            width={`1.5rem`}
                                        />
                                        <a href='/'>{`Home`}</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <AboutIcon
                                            color={`#5F73B0`}
                                            width={`1.5rem`}
                                        />
                                        <a href='#about'>{`Sobre mí`}</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <ExperienceIcon
                                            color={`#5F73B0`}
                                            width={`1.5rem`}
                                        />
                                        <a href='#experience'>{`Experiencia`}</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <TechnologiesIcon
                                            color={`#5F73B0`}
                                            width={`2.7rem`}
                                        />
                                        <a href='#technologies'>{`Tecnologías`}</a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <ContactIcon
                                            color={`#5F73B0`}
                                            width={`1.5rem`}
                                        />
                                        <a href='#contact'>{`Contacto`}</a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
};
