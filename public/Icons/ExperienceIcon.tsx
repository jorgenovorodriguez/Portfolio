import React from 'react';
import { SvgIconProps } from '../../src/interfaces/interfaces';

export const ExperienceIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg viewBox='0 0 24 24' fill={color} width={width}>
            <path d='M21.71 20.29l-1.42 1.42a1 1 0 01-1.41 0L7 9.85A3.81 3.81 0 016 10a4 4 0 01-3.78-5.3l2.54 2.54.53-.53 1.42-1.42.53-.53L4.7 2.22A4 4 0 0110 6a3.81 3.81 0 01-.15 1l11.86 11.88a1 1 0 010 1.41M2.29 18.88a1 1 0 000 1.41l1.42 1.42a1 1 0 001.41 0l5.47-5.46-2.83-2.83M20 2l-4 2v2l-2.17 2.17 2 2L18 8h2l2-4z' />
        </svg>
    );
};
