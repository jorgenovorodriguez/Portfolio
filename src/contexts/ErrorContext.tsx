import { t } from 'i18next';
import React, { createContext, useContext, useState } from 'react';
import { ErrorContextType, ErrorProviderProps } from '../interfaces/interfaces';
import { toast } from 'react-toastify';
import { getImageUrl } from '../utils';

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useError = () => {
    const context = useContext(ErrorContext);
    if (!context) {
        throw new Error(
            t('useError debe ser usado dentro de un ErrorProvider')
        );
    }
    return context;
};

export const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
    const setError = (message: string) => {
        toast.error(
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {message}
                <img
                    src={getImageUrl('firulais/firulais.png')}
                    alt='Error'
                    style={{
                        width: '30px',
                        height: '30px',
                        marginLeft: '5px',
                    }}
                />
            </div>,
            {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
        );
    };

    return (
        <ErrorContext.Provider value={{ setError }}>
            {children}
        </ErrorContext.Provider>
    );
};
