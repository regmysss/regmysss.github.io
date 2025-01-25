import './social.css'

export const Social = ({ children, link }) => {
    return (
        <li className='social'>
            <a href={link} >
                {children}
            </a>
        </li>
    )
};