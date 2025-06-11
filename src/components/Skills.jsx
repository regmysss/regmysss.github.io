import { useRef } from "react";
import { InfoSection } from "./UI/InfoSection/InfoSection";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/skills";
import '../styles/skills.css';

export const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-80px 0px", once: true });

    return (
        <section id="skills">
            <div className="skills-content">
                <InfoSection
                    title={"What I Know"}
                    description={"Here are the technologies and tools I use to create efficient and user-friendly solutions."}
                />
                <div className="skills-list">
                    {
                        skills.map((category, index) => (
                            <div key={index} className="skills-column">
                                <div                            >
                                    <h3>{category.category}</h3>
                                    <ul                                    >
                                        {category.skills.map((item, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: 100 }}
                                                whileInView={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                                viewport={{ once: true }}
                                                ref={ref}
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
        </section>
    );
};