import { FiGithub, FiInstagram } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import { RiDiscordLine } from 'react-icons/ri';
import { MdOutlineEmail } from "react-icons/md";

export const socials = [
    {
        name: "Email",
        value: "vladyslavyarmolyuk@gmail.com",
        link: "mailto:vladyslavyarmolyuk@gmail.com",
        icon: MdOutlineEmail
    },
    {
        name: "GitHub",
        value: "@regmysss",
        link: "https://github.com/regmysss",
        icon: FiGithub
    },
    {
        name: "Instagram",
        value: "@vlados.yrm",
        link: "https://www.instagram.com/vlados.yrm/",
        icon: FiInstagram
    },
    {
        name: "Telegram",
        value: "@regmysss",
        link: "https://t.me/regmysss",
        icon: LiaTelegram
    },
    {
        name: "Discord",
        value: "@regmysss",
        link: "https://discord.com/users/456494528589856799",
        icon: RiDiscordLine
    }
]