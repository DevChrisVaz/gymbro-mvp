import { useState } from 'react';

const useModal = (initialValue: boolean = false) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialValue);

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
    };

    return { isOpen, openModal, closeModal };
}

export default useModal;