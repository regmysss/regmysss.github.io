import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiEye } from "react-icons/fi";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import './projectBox.css';

export const ProjectBox = ({ title, description, tecnologes, image, linkGithub, linkDemo, animationDelay }) => {
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
            className='projectBox'
        >
            <h3>{t(title)}</h3>
            <p>{t(description)}</p>
            <ul>
                {tecnologes.map((tech, index) => (
                    <li
                        key={index}
                    >
                        {tech}
                    </li>
                ))}
            </ul>
            <div className='projectImageWrapper'>
                <div className='projectImageBtns'>
                    <button><MdOutlinePhotoSizeSelectActual /></button>
                    {
                        linkGithub &&
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={linkGithub}
                        >
                            <FiGithub />
                        </a>
                    }
                    {
                        linkDemo &&
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={linkDemo}
                        >
                            <FiEye />
                        </a>
                    }
                </div>
                <img src={image} alt={t(title)} />
            </div>
        </motion.div>
    );
};