import { NavigationButtonProps } from '../../../interfaces/interfaces';
import styles from './NavigationButton.module.css';

export const NavigationButton: React.FC<NavigationButtonProps> = ({
    direction,
    onClick,
    hidden,
}) => (
    <div
        className={`${styles.navigationButton} ${hidden ? styles.hidden : ''} ${
            direction === 'left' ? styles.prevNavigation : styles.nextNavigation
        }`}
        onClick={onClick}
    >
        {direction === 'left' ? '<' : '>'}
    </div>
);
