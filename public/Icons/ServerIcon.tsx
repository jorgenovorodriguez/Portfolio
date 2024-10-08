import React from 'react';
import { SvgIconProps } from '../../src/interfaces/interfaces';

export const ServerIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg fill='none' viewBox='0 0 15 15' width={width}>
            <path
                stroke={color}
                d='M13.5 5.5h-12m12 0a1 1 0 001-1v-2a1 1 0 00-1-1h-12a1 1 0 00-1 1v2a1 1 0 001 1m12 0a1 1 0 011 1v2a1 1 0 01-1 1m-12-4a1 1 0 00-1 1v2a1 1 0 001 1m12 0h-12m12 0a1 1 0 011 1v2a1 1 0 01-1 1h-12a1 1 0 01-1-1v-2a1 1 0 011-1m.5-6h3m-3 4h3m-3 4h3'
            />
        </svg>
    );
};
