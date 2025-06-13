import { motion } from 'framer-motion';
import './projectBox.css';

export const ProjectBox = ({ title, image, link, animationDelay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: animationDelay }}
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