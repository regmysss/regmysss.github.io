import { IoMdClose } from "react-icons/io";
import { Social } from "./UI/Social/Social";
import { socials } from "../data/socials";
import '../styles/contactmodal.css';

export const ContactModal = ({ onClose }) => {

  const handleClose = (e) => {
    if (e.target.classList.contains('modal-wrapper')) {
      onClose();
    }
  }

  return (
    <div className='modal'>
      <div
        className="modal-wrapper"
        onClick={handleClose}
      >
        <div className="modal-content">
          <button
            className="btn-close"
            onClick={onClose}
          >
            <IoMdClose />
          </button>
          <h2 className="modal-title">Contact Me</h2>
          <p className="modal-text">There should be a fill-in window here, it will be available soon.</p>
          <div className="or-divider">
            <hr />
            <span>or</span>
            <hr />
          </div>
          <div className="contact-socials">
            <ul>
              {
                socials.map((social, index) => (
                  <Social key={index} link={social.link} aminationDelay={index * 0.2}>
                    <social.icon />
                  </Social>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
