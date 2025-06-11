import { InfoSection } from "./UI/InfoSection/InfoSection";
import { motion } from "framer-motion";
import '../styles/about.css';

export const About = () => {
    return (
        <section id='about'>
            <div className='about-content'>
                <InfoSection
                    title={"Who I Am"}
                    description={"Here I will tell you a little about myself."}
                />
                <div className='about-info'>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='about-text'
                    >
                        <p >
                            I’m <b>Vladyslav Yarmolyuk,</b> a <b>passionate web developer</b> from Kyiv, Ukraine,
                            with over <b>3 years of experience</b> studying and practicing modern web development.
                            I focus on building <b>responsive, functional, and user-friendly</b> websites that
                            solve real-world problems.
                        </p>
                        <br />
                        <p >
                            I’m always excited to explore <b>new technologies</b> and continuously learn to create
                            better and more <b>innovative IT solutions</b>. My goal is to deliver <b>high-quality digital
                                products</b> that not only meet but exceed user expectations.
                        </p>
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
        </section>
    )
};