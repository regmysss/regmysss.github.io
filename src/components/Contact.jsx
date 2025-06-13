import { InfoSection } from "./UI/InfoSection/InfoSection"
import { socials } from "../data/socials";
import { Social } from "./UI/Social/Social";
import { FaExternalLinkAlt } from "react-icons/fa";
import '../styles/contact.css';

export const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-wrapper">
                <div className="contact-content">
                    <InfoSection
                        title={"Get in Touch"}
                        description={"Feel free to reach out for collaborations, inquiries, or just a friendly chat."}
                    />
                    <div className="contact-list">
                        {
                            socials.map((social, index) => (
                                <Social key={index} link={social.link} aminationDelay={index * 0.2} typeSocial="fullSize">
                                    <div className="contact-item">
                                        <div className="contact-details">
                                            <div className="contact-icon">
                                                <social.icon />
                                            </div>
                                            <div className="contact-info">
                                                <h3>{social.name}</h3>
                                                <p className="contact-link">{social.value}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <FaExternalLinkAlt size={20} />
                                        </div>
                                    </div>
                                </Social>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
