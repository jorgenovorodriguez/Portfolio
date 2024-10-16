import { useEffect, useState } from 'react';
import { NavbarMobile } from './NavbarMobile';
import { NavbarDesktop } from './NavbarDesktop';

export const Navbar: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1030);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1030);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</>;
};
