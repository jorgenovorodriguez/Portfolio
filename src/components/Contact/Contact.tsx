import React, { useEffect, useMemo, useRef, useState } from 'react';
import useField from '../../hooks/useField';
import styles from './Contact.module.css';
import { Modal } from '../Modal/Modal';
import { t } from 'i18next';
import { postMessageData } from '../../services/apiServices';

export const Contact: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true);

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

    useEffect(() => {
        if (
            !nameField.error &&
            !emailField.error &&
            !messageField.error &&
            nameField.value?.trim() !== '' &&
            emailField.value?.trim() !== '' &&
            messageField.value?.trim() !== ''
        ) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [
        nameField.value,
        emailField.value,
        messageField.value,
        nameField.error,
        emailField.error,
        messageField.error,
    ]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (nameField.error || emailField.error || messageField.error) {
            return;
        }

        const data = {
            name: nameField.value,
            email: emailField.value,
            message: messageField.value,
        };

        try {
            await postMessageData(data);
            setOpenModal(true);
            resetFormFields();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id='contact'>
            <div className={styles.container}>
                <h2 className={styles.title}>{`Contacto`}</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor='name'>{t(`Nombre`)}</label>
                        <input
                            {...nameField}
                            placeholder={t(`Nombre`)}
                            name='first_name'
                        />
                        {nameField.error && (
                            <span>
                                {`${
                                    nameField.error +
                                    t(` El nombre no puede estar vacío.`)
                                } `}
                            </span>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor='email'>{t(`Email`)}</label>
                        <input {...emailField} placeholder={t(`Email`)} />
                        {emailField.error && (
                            <span>{`${t(
                                ` Asegúrese de que tiene formato de Email.`
                            )} `}</span>
                        )}
                    </div>
                    <div className={styles.formGroupMessage}>
                        <label htmlFor='message'>{t(`Mensaje`)}</label>
                        <textarea
                            {...messageField}
                            placeholder={t(`Mensaje`)}
                        />
                        {messageField.error && (
                            <span>{`${
                                nameField.error +
                                t(` El mensaje no puede estar vacío.`)
                            } `}</span>
                        )}
                    </div>
                    <button type='submit' disabled={buttonDisabled}>
                        {t(`Enviar`)}
                    </button>
                </form>
            </div>
            {openModal && (
                <Modal
                    text={t(`Mensaje enviado con éxito`)}
                    onClose={() => setOpenModal(false)}
                />
            )}
        </section>
    );
};
