"use client"
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex items-center justify-end rounded-md md:hidden">
                <IoMdMenu size={35} className="fill-white" onClick={() => setIsOpen(!isOpen)} />
            </div>
            <nav className={`w-screen bg-green-300 min-h-screen fixed ${isOpen ? '' : 'translate-x-full'} transition-all ease-in-out`}>
                <div className="flex items-center justify-end rounded-md md:hidden">
                    <IoMdMenu size={35} className="fill-white" onClick={() => setIsOpen(!isOpen)} />
                </div>
            </nav>
        </>
    );
}

export { MobileMenu };
