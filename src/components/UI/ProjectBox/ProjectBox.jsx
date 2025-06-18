import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ImageModal } from '../../ImageModal';
import { motion } from 'framer-motion';
import { FiGithub, FiEye } from "react-icons/fi";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import './projectBox.css';

export const ProjectBox = ({ title, description, tecnologes, images, linkGithub, linkDemo, animationDelay }) => {
    const [isOpenModal, setOpenModal] = useState(false);
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
            className='project-box'
        >
            <div className='project-info'>
                <div className='project-title'>
                    <h3>{t(title)}</h3>
                    <div className='project-btns'>
                        <button
                            onClick={() => setOpenModal(true)}
                        >
                            <MdOutlinePhotoSizeSelectActual />
                        </button>
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
                </div>
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
            </div>
            <div className='project-image'>
                <img
                    src={images[0]}
                    alt={t(title)}
                    loading='lazy'
                />
            </div>
            <ImageModal
                title={t(title)}
                images={images}
                isOpen={isOpenModal}
                setOpen={() => setOpenModal(false)}
            />
        </motion.div>
    );
};