import React from 'react'
import { useGalleryContext } from '../../lib/GalleryContext'
// import { IoMdClose } from "react-icons/io";

const Modal = () => {
    const { addItem, setIsModalOpen } = useGalleryContext();
    const [title, setTitle] = React.useState('');
    const [image, setImage] = React.useState(null);

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !image) return;
        addItem({ title, image });
    }


    return (
        <div className='fixed flex flex-col m-auto inset-0 border border-slate-200 bg-white/90 backdrop-blur-2xl rounded-lg py-6 px-8 z-50 max-w-xl max-h-fit'>
            <div className="flex items-center justify-between pb-5">
                <span className='font-semibold text-main-darks text-2xl text-center'>Add new gallery item</span>
                {/* <IoMdClose className='p-4 rounded-md text-main-text bg-main-border'  /> */}
            </div>
            <form onSubmit={handleSubmit}>
                <div className='mb-4 flex flex-col gap-2'>
                    <label className='font-medium'>Title</label>
                    <input type="text" className='w-full border border-slate-300 rounded-md px-4 py-3 outline-none placeholder:italic' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Item title goes here...' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='font-medium'>Image</label>
                    <input type="file" className='' accept='image/*' onChange={handleImage} />
                </div>

                <div className='flex items-center justify-between gap-5'>
                    <button type='submit' className='mt-8 px-5 py-3 text-center outline-none cursor-pointer text-white rounded-md w-full bg-main-darks font-semibold'>Add Item</button>
                    <button className='mt-8 px-5 py-3 text-center outline-none cursor-pointer text-main-darks rounded-md w-full bg-slate-200 font-semibold' onClick={() => setIsModalOpen(false)}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Modal