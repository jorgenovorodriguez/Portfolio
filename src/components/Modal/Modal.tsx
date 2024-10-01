import React from 'react';
import styles from './Modal.module.css'; // Asegúrate de importar los estilos

interface ModalProps {
    text: string;
    onClose: () => void;
}

import { CloseIcon } from '../../../public/Icons/CloseIcon';

export const Modal: React.FC<ModalProps> = ({ text, onClose }) => {
    return (
        <>
            <div className={styles.modalOverlay} onClick={onClose}>
                <div className={styles.modal}>
                    <div className={styles.closeIcon} onClick={onClose}>
                        <CloseIcon color={`#FFFFFF`} width={`2rem`} />
                    </div>

                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};
