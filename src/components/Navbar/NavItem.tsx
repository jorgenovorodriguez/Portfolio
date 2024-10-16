import React from 'react';
import { NavItemProps } from '../../interfaces/interfaces';

export const NavItem: React.FC<NavItemProps> = ({
    Icon,
    label,
    href,
    width = '1.2rem',
}) => {
    return (
        <div>
            <Icon color='#5F73B0' width={width} />
            <a href={href}>{label}</a>
        </div>
    );
};
