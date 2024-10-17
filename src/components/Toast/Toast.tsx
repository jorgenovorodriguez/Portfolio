import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Toast.module.css';

const Toast: React.FC = () => {
    return (
        <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            closeButton={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            pauseOnFocusLoss
            theme='dark'
            className={styles.customToast}
        />
    );
};

export default Toast;
