import { createContext, useState } from "react";

export const ModalContext = createContext({
    isModalOpen: false,
    setIsModalOpen: () => { },
    onClose: () => { },
});

export const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClose = () => {
        setIsModalOpen(false);
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen, onClose }}>
            {children}
        </ModalContext.Provider>
    )
}
