import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import "../../styles/home.css";

export const Home = () => {
    const { t } = useTranslation();

    return (
        <main>
            <section id="home">
                <div className="home-wrapper">
                    <div className="home-content">
                        <motion.h1
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="home-title"
                        >
                            <Trans
                                i18nKey="home.welcome"
                                components={{
                                    selection: <span className="selection" />,
                                }}
                            />
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="home-subtitle"
                        >
                            <Trans
                                i18nKey="home.welcomeDescription"
                                components={{
                                    selection: <span className="selection" />,
                                }}
                            />
                        </motion.p>
                        <motion.a
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                opacity: { duration: 0.5, delay: 0.4 },
                                y: { duration: 0.5, delay: 0.4 },
                                scale: { duration: 0.2 },
                            }}
                            viewport={{ once: true }}
                            href="#projects"
                            className="btn-projects"
                            aria-label={t("home.projectsBtn")}
                        >
                            {t("home.projectsBtn")}
                        </motion.a>
                    </div>
                </div>
            </section>
        </main>
    );
};
