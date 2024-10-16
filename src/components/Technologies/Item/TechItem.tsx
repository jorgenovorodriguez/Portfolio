import { t } from 'i18next';
import { TechItemProps } from '../../../interfaces/interfaces';
import styles from './TechItem.module.css';

export const TechItem: React.FC<TechItemProps> = ({ icon, title, text }) => (
    <li className={styles.techItem}>
        <div className={styles.techItemText}>
            <h3>
                {icon} {t(title)}
            </h3>
            <p>{t(text)}</p>
        </div>
    </li>
);
