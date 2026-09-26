import logo from "@/app/assets/logo.png"
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="border-t border-gray-800/75 bg-[#1a1d23] px-[16px] py-[32px]">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">

                {/* Logo */}
                <div className="flex items-center gap-2 text-sm">
                    <Image src={logo} alt="Logo" width={20} height={20} />
                    <p className="font-oswald text-lg text-white">FITLOG</p>
                </div>

                {/* Copyright */}
                <div className="text-center text-xs text-gray-400 sm:text-right sm:text-sm">
                    @ 2026 FitLog — Workout Library. Train hard, log honest.
                </div>

            </div>
        </footer>
    );
};

export default Footer;