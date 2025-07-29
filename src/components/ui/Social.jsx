import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "../../styles/social.css";

export const Social = ({
    children,
    link,
    ariaLabel,
    animationDelay,
    typeSocial = "compactSize",
}) => {
    const { t } = useTranslation();

    if (typeSocial === "compactSize")
        return (
            <li className="compactSize">
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("contact.ariaLabel", { name: ariaLabel })}
                >
                    {children}
                </a>
            </li>
        );

    return (
        <motion.a
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{
                scale: 1.02,
                rotate: -1,
                backgroundColor: "var(--hover-bg-color)",
            }}
            transition={{
                opacity: { duration: 0.5, delay: animationDelay },
                x: { duration: 0.5, delay: animationDelay },
                scale: { duration: 0.2 },
                rotate: { duration: 0.2 },
                backgroundColor: { duration: 0.2 },
            }}
            viewport={{ once: true }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="fullSize"
            aria-label={t("contact.ariaLabel", { name: ariaLabel })}
        >
            {children}
        </motion.a>
    );
};
