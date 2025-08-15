import { useState, lazy } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FiGithub, FiEye } from "react-icons/fi";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import "../../styles/projectBox.css";

const LazyImageModal = lazy(() =>
    import("./ImageModal").then((module) => ({ default: module.ImageModal }))
);

export const ProjectBox = ({
    title,
    description,
    tecnologes,
    images,
    linkGithub,
    linkDemo,
    ariaLabel,
}) => {
    const [isOpenModal, setOpenModal] = useState(false);
    const { t } = useTranslation();

    const animationDelay = Math.random() * 0.2 + 0.05;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{
                opacity: { duration: 0.5, delay: animationDelay },
                y: { duration: 0.5, delay: animationDelay },
                scale: { duration: 0.2 },
            }}
            viewport={{ once: true, amount: 0.4 }}
            className="project-box"
        >
            <div className="project-info">
                <div className="project-title">
                    <h3>{title}</h3>
                    <div className="project-btns">
                        <button
                            onClick={() => setOpenModal(true)}
                            title={t("projects.viewImages")}
                            aria-label={t("projects.viewImages")}
                        >
                            <MdOutlinePhotoSizeSelectActual />
                        </button>
                        {linkGithub && (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={linkGithub}
                                aria-label={ariaLabel}
                            >
                                <FiGithub />
                            </a>
                        )}
                        {linkDemo && (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={linkDemo}
                                aria-label={ariaLabel}
                            >
                                <FiEye />
                            </a>
                        )}
                    </div>
                </div>
                <p>{description}</p>
                <ul>
                    {tecnologes.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
            <div className="project-image">
                <img src={images[0]} alt={title} loading="lazy" />
            </div>
            <LazyImageModal
                title={title}
                images={images}
                isOpen={isOpenModal}
                setOpen={() => setOpenModal(false)}
            />
        </motion.div>
    );
};
