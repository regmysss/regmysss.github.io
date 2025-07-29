import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FiX } from "react-icons/fi";
import '../../styles/imageModal.css';

export const ImageModal = ({ title, images, isOpen, setOpen }) => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);

    const handleNextImage = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const handlePrevImage = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return (
        <Dialog.Root open={isOpen} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay
                    className='dialog-overlay'
                    style={{ backgroundImage: `url(${images[index]})` }}
                />
                <Dialog.Content className='dialog-content'>
                    <Dialog.Title className='dialog-title' >
                        {title}
                    </Dialog.Title>
                    <Dialog.Close className='dialog-close'>
                        <FiX />
                    </Dialog.Close>

                    <div className='dialog-slider'>
                        <div className='slider-controls'>
                            <button onClick={handlePrevImage}>
                                <GrFormPrevious />
                            </button>
                        </div>
                        <div className='slider-container'>
                            <div
                                className='slider-track'
                                style={{ transform: `translateX(-${index * 100}%)` }}
                            >
                                {images.map((image, idx) => (
                                    <div
                                        key={idx}
                                        className='slider-image'
                                    >
                                        <img
                                            src={image}
                                            alt={`image-${idx}`}
                                            loading='lazy'
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='slider-controls'>
                            <button onClick={handleNextImage}>
                                <GrFormNext />
                            </button>
                        </div>
                    </div>
                    <Dialog.Description className='dialog-description'>
                        {
                            t("imageModal.description", {
                                currentImage: index + 1,
                                totalImages: images.length
                            })
                        }
                    </Dialog.Description>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
