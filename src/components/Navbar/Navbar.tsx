import { useEffect, useRef, useState, MouseEvent } from 'react';
import styles from './Navbar.module.css';
import { HomeIcon } from '../../Icons/HomeIcon';
import { AboutIcon } from '../../Icons/AboutIcon';
import { ExperienceIcon } from '../../Icons/ExperienceIcon';
import { TechnologiesIcon } from '../../Icons/TechnologiesIcon';
import { ContactIcon } from '../../Icons/ContactIcon';
import { CloseIcon } from '../../Icons/CloseIcon';
import { MenuIcon } from '../../Icons/MenuIcon';

type MenuRef = HTMLDivElement | null;

export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const menuRef = useRef<MenuRef>(null);

    const handleClickOutside = (e: MouseEvent<Document>) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (!menuOpen) return;

        document.addEventListener('mousedown', handleClickOutside as any);
        return () =>
            document.removeEventListener(
                'mousedown',
                handleClickOutside as any
            );
    }, [menuOpen]);

    return (
        <nav className={styles.navbar}>
            <div className={styles.menu} ref={menuRef}>
                <div
                    className={styles.menuButton}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {' '}
                    {menuOpen ? (
                        <CloseIcon color={`#FFFFFF`} width={`2rem`} />
                    ) : (
                        <MenuIcon color={`#FFFFFF`} width={`2rem`} />
                    )}
                </div>
                <ul
                    className={`${styles.menuItems} ${
                        menuOpen && styles.menuOpen
                    }`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <div>
                            <HomeIcon color={`#FFFFFF`} width={`1.2rem`} />
                            <a href='/'>{`Home`}</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <AboutIcon color={`#FFFFFF`} width={`1.2rem`} />
                            <a href='#about'>{`Sobre mí`}</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <ExperienceIcon
                                color={`#FFFFFF`}
                                width={`1.2rem`}
                            />
                            <a href='#experience'>{`Experiencia`}</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <TechnologiesIcon
                                color={`#FFFFFF`}
                                width={`1.2rem`}
                            />
                            <a href='#technologies'>{`Tecnologías`}</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <ContactIcon color={`#FFFFFF`} width={`1.2rem`} />
                            <a href='#contact'>{`Contacto`}</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
