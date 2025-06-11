import { motion } from 'framer-motion';
import './projectBox.css';

export const ProjectBox = ({ title, image, link }) => {
    function getAnimationDelay(min, max) {
        const randomDelay = Math.random() * (max - min) + min;
        console.log("🚀 ~ getAnimationDelay ~ randomDelay:", randomDelay.toFixed(1))
        return randomDelay.toFixed(1);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: getAnimationDelay(0.2, 0.6) }}
            viewport={{ once: true, amount: 0.5 }}
            className="project-box"
        >
            <a href={link}>
                <div className="project-box-image">
                    <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
            </a>
        </motion.div>
    );
};