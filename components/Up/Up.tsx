import { useScrollY } from '@/hooks/useScrollY';
import styles from './Up.module.css';
import cn from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const Up = (): JSX.Element => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight });
    }, [y, controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.div
            className={styles.up}
            onClick={scrollToTop}
            animate={controls}
            initial={{ opacity: 0 }}
        >
            <img src="/icon/upIcon.svg" alt="" />
        </motion.div>
    );
}