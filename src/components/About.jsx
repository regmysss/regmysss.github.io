import { InfoSection } from "./UI/InfoSection/InfoSection";
import { motion } from "framer-motion";
import { useTranslation, Trans } from 'react-i18next';
import '../styles/about.css';

export const About = () => {
    const { t } = useTranslation();

    return (
        <section id='about'>
            <div className='about-wrapper'>
                <div className='about-content'>
                    <InfoSection
                        title={t("aboutTitle")}
                        description={t("aboutDescription")}
                    />
                    <div className='about-info'>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='about-text'
                        >
                            <Trans
                                i18nKey="aboutDetails"
                                components={{
                                    paragraph: <p />,
                                    break: <br />,
                                    bold: <b />,
                                }}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='about-photo'
                        >
                            <img src="avatar.jpg" alt="photo" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
};