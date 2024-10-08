import React, { useEffect, useRef, useState } from 'react';
import styles from './MouseFollower.module.css';

const MouseFollower: React.FC = () => {
    const followerRef = useRef<HTMLDivElement | null>(null);
    const [tooltipText, setTooltipText] = useState('');

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (followerRef.current) {
                const offset = 20;
                followerRef.current.style.transform = `translate(${
                    event.clientX + offset
                }px, ${event.clientY + offset}px)`;
            }

            const target = event.target as HTMLElement;

            if (target && target.dataset.tooltip) {
                setTooltipText(target.dataset.tooltip);
            } else {
                setTooltipText('');
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className={styles.follower} ref={followerRef}>
            {tooltipText && <div className={styles.tooltip}>{tooltipText}</div>}
        </div>
    );
};

export default MouseFollower;
