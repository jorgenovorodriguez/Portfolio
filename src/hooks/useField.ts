import { t } from 'i18next';
import { useState } from 'react';

import { UseFieldProps } from '../interfaces/interfaces';

const useField = ({ type, validate }: UseFieldProps) => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false); 

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (validate) {
            setError(!validate(newValue)); 
        }
    };

    const reset = () => {
        setValue('');
        setError(false); 
    };

    return {
        type,
        value,
        error, 
        onChange,
        reset
    };
};

export default useField;
