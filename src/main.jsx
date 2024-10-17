import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ErrorProvider } from './contexts/ErrorContext.tsx';
import './index.css';

import '@fontsource/roboto';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ErrorProvider>
            <App />
        </ErrorProvider>
    </StrictMode>
);
