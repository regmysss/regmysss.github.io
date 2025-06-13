import { motion } from 'framer-motion';
import './social.css'

export const Social = ({ children, link, aminationDelay, typeSocial = 'compactSize' }) => {
    if (typeSocial === 'compactSize')
        return (
            <li className='compactSize'>
                <a href={link} target='_blank' rel='noopener noreferrer'>
                    {children}
                </a>
            </li>
        )

    return (
        <motion.a
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: aminationDelay }}
            viewport={{ once: true }}
            href={link} target='_blank' rel='noopener noreferrer'
            className='fullSize'
        >
            {children}
        </motion.a>
    );
};