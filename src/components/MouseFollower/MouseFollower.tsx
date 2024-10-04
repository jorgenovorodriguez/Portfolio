import React, { useEffect, useRef } from 'react';
import styles from './MouseFollower.module.css';

const MouseFollower: React.FC = () => {
    const followerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (followerRef.current) {
                const offset = 20;
                followerRef.current.style.transform = `translate(${
                    event.clientX + offset
                }px, ${event.clientY + offset}px)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className={styles.follower} ref={followerRef}></div>;
};

export default MouseFollower;
