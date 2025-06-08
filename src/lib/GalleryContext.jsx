/* eslint-disable no-undef */
import { createContext, useContext, useState } from "react";

import { initialGalleryItems } from "../data/gallery";

const GalleryContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useGalleryContext = () => useContext(GalleryContext);

export const GalleryProvider = ({ children }) => {
    const [galleryItems, setGalleryItems] = useState(initialGalleryItems);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addItem = (item) => {
        setGalleryItems((prev) => [...prev, { id: Date.now(), ...item }]);
        setIsModalOpen(false);
    };


    return (
        <GalleryContext.Provider value={{ galleryItems, isModalOpen, setIsModalOpen, addItem }}>
            {children}
        </GalleryContext.Provider>
    )
}