import React, { useMemo, useState } from 'react';
import useField from '../../hooks/useField';
import styles from './Contact.module.css';
import { t } from 'i18next';
import { postMessageData } from '../../services/apiServices';
import { Loading } from '../Loading/Loading';
import {
    CONTACT_ERROR_MAIL,
    CONTACT_ERROR_MESSAGE,
    CONTACT_ERROR_NAME,
} from '../../content/texts';
import { useError } from '../../contexts/ErrorContext';
import { toast } from 'react-toastify';

export const Contact: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { setError } = useError();

    const resetFormFields = () => {
        nameField.reset();
        emailField.reset();
        messageField.reset();
    };

    const nameField = useField({
        type: 'text',
        validate: (value) => value.trim() !== '',
    });

    const emailField = useField({
        type: 'email',
        validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    });

    const messageField = useField({
        type: 'textarea',
        validate: (value) => value.trim() !== '',
    });

    const buttonDisabled = useMemo(() => {
        return (
            nameField.error ||
            emailField.error ||
            messageField.error ||
            nameField.value.trim() === '' ||
            emailField.value.trim() === '' ||
            messageField.value.trim() === ''
        );
    }, [nameField, emailField, messageField]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        event.preventDefault();
        if (nameField.error || emailField.error || messageField.error) {
            setLoading(false);
            return;
        }

        const data = {
            name: nameField.value,
            email: emailField.value,
            message: messageField.value,
        };
        try {
            await postMessageData(data);
            toast.success(t('Mensaje enviado con éxito'));
            resetFormFields();
        } catch (err) {
            setError(t('Error al enviar el mensaje'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id='contact'>
            <div className={styles.container}>
                <h2 className={`${styles.title} text-gradient`}>
                    {t(`Contacto`)}
                </h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor='name'>{t(`Nombre`)}</label>
                        <input
                            {...nameField}
                            placeholder={t(`Nombre`)}
                            name='first_name'
                        />
                        {nameField.error && (
                            <span>{`${t(CONTACT_ERROR_NAME)} `}</span>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor='email'>{t(`Email`)}</label>
                        <input {...emailField} placeholder={t(`Email`)} />
                        {emailField.error && (
                            <span>{`${t(CONTACT_ERROR_MAIL)}`}</span>
                        )}
                    </div>
                    <div className={styles.formGroupMessage}>
                        <label htmlFor='message'>{t(`Mensaje`)}</label>
                        <textarea
                            {...messageField}
                            placeholder={t(`Mensaje`)}
                        />
                        {messageField.error && (
                            <span>{`${t(CONTACT_ERROR_MESSAGE)}`}</span>
                        )}
                    </div>
                    <button type='submit' disabled={buttonDisabled}>
                        {t(`Enviar`)}
                    </button>
                </form>
            </div>
            {loading && <Loading />}
        </section>
    );
};
