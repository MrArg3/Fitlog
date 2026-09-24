import React from 'react';
import logo from "@/app/assets/logo.png"
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#1a1d23] border-t px-[16px]  border-gray-800/75 py-[32px]">
            <div className=" max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex gap-2 text-sm align-center items-center">
                    <Image src={logo} alt="Logo" width={20} height={20}  />
                    <p className="font-oswald text-lg">FITLOG</p>
                </div>
               
                <div className="text-gray-400 text-sm">
                    @ 2026 FitLog — Workout Library. Train hard, log honest.
                </div>
            </div>

            {/* <div className="max-w-6xl mx-auto flex justify-between items-center text-gray-300 text-lg">
                <div>
                    logo
                </div>
                <div>Since 2026</div>
            </div> */}
        </footer>
    );
};

export default Footer;