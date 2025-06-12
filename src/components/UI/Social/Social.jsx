import { motion } from 'framer-motion';
import './social.css'

export const Social = ({ children, link, aminationDelay }) => {
    return (
        <motion.li
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: aminationDelay }}
            viewport={{ once: true }}
            className='social'
        >
            <a href={link} >
                {children}
            </a>
        </motion.li>
    )
};