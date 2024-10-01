import React from 'react';
import { SvgIconProps } from '../interfaces/interfaces';

export const CloseIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg viewBox='0 0 512 512' fill={color} width={width}>
            <path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z' />
        </svg>
    );
};
