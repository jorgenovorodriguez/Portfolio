import React from 'react';
import { SvgIconProps } from '../../src/interfaces/interfaces';

export const DocIcon: React.FC<SvgIconProps> = ({ color, width }) => {
    return (
        <svg fill='none' viewBox='0 0 24 24' width={width}>
            <path
                fill={color}
                d='M7 18h10v-2H7v2zM17 14H7v-2h10v2zM7 10h4V8H7v2z'
            />
            <path
                fill={color}
                fillRule='evenodd'
                d='M6 2a3 3 0 00-3 3v14a3 3 0 003 3h12a3 3 0 003-3V9a7 7 0 00-7-7H6zm0 2h7v5h6v10a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1zm9 .1A5.009 5.009 0 0118.584 7H15V4.1z'
                clipRule='evenodd'
            />
        </svg>
    );
};
