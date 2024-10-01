import { t } from 'i18next';
import { useState } from 'react';
interface UseFieldProps {
    type: string;
    validate?: (value: string) => boolean;
}

const useField = ({ type, validate}: UseFieldProps) => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newValue = event.target.value;
        setValue(newValue);

        if (validate) {
            setError(validate(newValue) ? null : t('Campo inválido.') );
        } else {
            setError(null);
        }
    };

    const reset = () => {
        setValue('');
        setError(null);
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
