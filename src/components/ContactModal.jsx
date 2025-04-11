import { IoMdClose } from "react-icons/io";
import '../styles/contactmodal.css';
import { Social } from "./UI/Social/Social";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import { RiDiscordLine } from "react-icons/ri";


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
              <Social link={"https://github.com/regmysss"}><FiGithub /></Social>
              <Social link={"https://www.instagram.com/vlados.yrm/"}><FiInstagram /></Social>
              <Social link={"https://t.me/regmysss"}><LiaTelegram /></Social>
              <Social link={"https://discord.gg/7MU6fszf"}><RiDiscordLine /></Social>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
