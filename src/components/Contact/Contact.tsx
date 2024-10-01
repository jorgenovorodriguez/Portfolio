import React, { useEffect, useState } from 'react';
import useField from '../../hooks/useField';
import styles from './Contact.module.css';
import { Modal } from '../Modal/Modal';

export const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

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
            nameField.value.trim() !== '' &&
            emailField.value.trim() !== '' &&
            messageField.value.trim() !== ''
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);

        if (nameField.error || emailField.error || messageField.error) {
            return;
        }

        console.log('Nombre:', nameField.value);
        console.log('Email:', emailField.value);
        console.log('Mensaje:', messageField.value);

        nameField.onChange({
            target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>);
        emailField.onChange({
            target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>);
        messageField.onChange({
            target: { value: '' },
        } as React.ChangeEvent<HTMLTextAreaElement>);

        setSubmitted(false);
        setOpenModal(true);
    };

    return (
        <section id='contact'>
            <div className={styles.container}>
                <h2 className={styles.title}>{`Contacto`}</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor='name'>{`Nombre`}</label>
                        <input {...nameField} placeholder='Nombre' />
                        {submitted && nameField.error && (
                            <span style={{ color: 'red' }}>
                                {nameField.error}
                            </span>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor='email'>{`Email`}</label>
                        <input {...emailField} placeholder='Email' />
                        {submitted && emailField.error && (
                            <p style={{ color: 'red' }}>{emailField.error}</p>
                        )}
                    </div>
                    <div className={styles.formGroupMessage}>
                        <label htmlFor='message'>{`Mensaje`}</label>
                        <textarea {...messageField} placeholder='Mensaje' />
                        {submitted && messageField.error && (
                            <p style={{ color: 'red' }}>{messageField.error}</p>
                        )}
                    </div>
                    <button
                        type='submit'
                        disabled={buttonDisabled}
                    >{`Enviar`}</button>
                </form>
            </div>
            {openModal && (
                <Modal
                    text={'Mensaje enviado con éxito'}
                    onClose={() => setOpenModal(false)}
                />
            )}
        </section>
    );
};
