import React from 'react';
import { SvgIconProps } from '../../src/interfaces/interfaces';

export const MenuIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg
            viewBox='0 0 21 21'
            fill='currentColor'
            height={width}
            width={width}
        >
            <g
                fill='none'
                fillRule='evenodd'
                stroke={color}
                strokeLinecap='round'
                strokeLinejoin='round'
            >
                <path d='M4.5 6.5h12M4.498 10.5h11.997M4.5 14.5h11.995' />
            </g>
        </svg>
    );
};
