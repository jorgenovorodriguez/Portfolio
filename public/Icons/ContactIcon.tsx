import React from 'react';
import { SvgIconProps } from '../../src/interfaces/interfaces';

export const ContactIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg viewBox='0 0 24 24' fill={color} width={width}>
            <path d='M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8z' />
        </svg>
    );
};
