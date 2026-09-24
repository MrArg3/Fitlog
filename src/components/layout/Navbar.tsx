import React from 'react';
import logo from "@/app/assets/logo.png"
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-[#0f1115]/80 backdrop-blur-md border-b border-gray-800/75 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto ">
                <div className="flex items-center justify-between py-4 px-8 text-white">


                    <div className="flex items-center gap-2 ">
                        <Image src={logo} alt="Logo" width={20} height={30} />
                        <h2 className=" font-oswald text-xl ">FITLOG</h2>
                    </div>

                    <div className="flex items-center gap-4 text-sm font-medium">
                        <ul className='flex gap-4'>
                            <Link href={"/"}><li>Home</li></Link>
                            <Link href={"/my-plan"}><li>My Plan</li></Link>
                        </ul>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <button>Plan <span className="bg-[#b2da00] text-black px-3 py-1 rounded-full">0</span> </button>
                        <button>Saved <span className="border border-[#ffffff] text-white px-3 py-1 rounded-full">0</span></button>
                    </div>

                </div>
            </div>
        </nav >
    );
};

export default Navbar;