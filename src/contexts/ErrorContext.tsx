import { t } from 'i18next';
import React, { createContext, useContext, useState } from 'react';
import { ErrorContextType, ErrorProviderProps } from '../interfaces/interfaces';
import { toast } from 'react-toastify';

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
        toast.error(message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <ErrorContext.Provider value={{ setError }}>
            {children}
        </ErrorContext.Provider>
    );
};
