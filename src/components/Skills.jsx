import { InfoSection } from "./UI/InfoSection/InfoSection";
import { useTranslation } from 'react-i18next';
import { getSkills } from "../data/skills";
import { motion } from "framer-motion";
import '../styles/skills.css';

export const Skills = () => {
    const { t } = useTranslation();
    const skills = getSkills(t);


    return (
        <section id="skills">
            <div className="skills-wrapper">
                <div className="skills-content">
                    <InfoSection
                        title={t("skills.title")}
                        description={t("skills.description")}
                    />
                    <div className="skills-list">
                        {
                            skills.map((category, index) => (
                                <div key={index} className="skills-column">
                                    <div                            >
                                        <h3>{t(category.category)}</h3>
                                        <ul                                    >
                                            {category.skills.map((item, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: 100 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                                    viewport={{ once: true }}
                                                >
                                                    {item}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};