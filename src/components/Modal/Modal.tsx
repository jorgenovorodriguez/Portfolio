import React from 'react';
import styles from './Modal.module.css'; // Asegúrate de importar los estilos

interface ModalProps {
    text: string;
    onClose: () => void;
}

import { CloseIcon } from '../../Icons/CloseIcon';

export const Modal: React.FC<ModalProps> = ({ text, onClose }) => {
    return (
        <>
            <div className={styles.modalOverlay} onClick={onClose}></div>
            <div className={styles.modal}>
                <div className={styles.closeIcon} onClick={onClose}>
                    <CloseIcon color={`#FFFFFF`} width={`2rem`} />
                </div>

                <p>{text}</p>
            </div>
        </>
    );
};
