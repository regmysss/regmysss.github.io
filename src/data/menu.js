import { FiHome, FiTv, FiLayers, FiUser, FiPhoneCall } from "react-icons/fi";

export const getMenuItems = (t) => [
    {
        icon: FiHome,
        label: t("header.home"),
        href: "."
    },
    {
        icon: FiTv,
        label: t("header.projects"),
        href: "#projects"
    },
    {
        icon: FiLayers,
        label: t("header.skills"),
        href: "#skills"
    },
    {
        icon: FiUser,
        label: t("header.about"),
        href: "#about"
    },
    {
        icon: FiPhoneCall,
        label: t("header.contact"),
        href: "#contact"
    }
];
