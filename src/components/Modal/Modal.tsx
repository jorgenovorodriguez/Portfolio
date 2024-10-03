import React from 'react';
import styles from './Modal.module.css';

import { ModalProps } from '../../interfaces/interfaces';

import { CloseIcon } from '../../../public/Icons/CloseIcon';

export const Modal: React.FC<ModalProps> = ({ text, onClose }) => {
    return (
        <>
            <div className={styles.modalOverlay} onClick={onClose}>
                <div className={styles.modal}>
                    <div className={styles.closeIcon} onClick={onClose}>
                        <CloseIcon color={`#a0a0a0`} width={`2rem`} />
                    </div>

                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};
