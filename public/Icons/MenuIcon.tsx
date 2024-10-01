import React from 'react';
import { SvgIconProps } from '../interfaces/interfaces';

export const MenuIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg baseProfile='tiny' viewBox='0 0 24 24' fill={color} width={width}>
            <path d='M19 17H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zm0-7H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zm0-7H5c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z' />
        </svg>
    );
};
