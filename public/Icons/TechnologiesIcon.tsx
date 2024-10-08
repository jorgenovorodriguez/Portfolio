import React from 'react';
import { SvgIconProps } from '../../src/interfaces/interfaces';

export const TechnologiesIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg viewBox='0 0 24 24' fill={color} width={width}>
            <path d='M7.375 16.781l1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 000 1.562l5 4zm9.25-9.562l-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 000-1.562l-5-4zm-1.649-4.003l-4 18-1.953-.434 4-18z' />
        </svg>
    );
};
