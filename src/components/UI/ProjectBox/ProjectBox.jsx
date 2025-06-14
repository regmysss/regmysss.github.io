import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './projectBox.css';

export const ProjectBox = ({ localizationKey, image, link, animationDelay }) => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{
                opacity: { duration: 0.5, delay: animationDelay },
                y: { duration: 0.5, delay: animationDelay },
                scale: { duration: 0.2 }
            }}
            viewport={{ once: true, amount: 0.4 }}
            className="project-box"
        >
            <a href={link}>
                <div className="project-box-image">
                    <img src={image} alt={t(localizationKey)} />
                </div>
                <h3>{t(localizationKey)}</h3>
            </a>
        </motion.div>
    );
};