"use client";

import React, { useState } from "react";
import Image from "next/image";

import logo from "@/app/assets/logo.png";
import hamburger from "@/app/assets/icon/hamburger.svg";
import "./Navmenu.css";
import Link from "next/dist/client/link";

const Navmenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#0f1115]/80 backdrop-blur-md border-b border-gray-800/75 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto">

                {/* Main Navbar */}
                <div className="flex items-center justify-between py-4 px-8 text-white">


                    {/* Logo */}
                    <div className="navbar-start flex items-center gap-4">
                        {/* Hamburger Button */}
                        <div>
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="lg:hidden flex items-center justify-center"
                                aria-label="Toggle menu"
                            >
                                <Image
                                    src={hamburger}
                                    alt="Menu"
                                    width={28}
                                    height={28}
                                />
                            </button>
                        </div>

                        <div className="flex items-center gap-2">
                            <Image
                                src={logo}
                                alt="FITLOG Logo"
                                width={20}
                                height={30}
                            />

                            <h2 className="font-oswald text-xl">
                               <Link href="/" className="cursor-pointer hover:text-[#C2F800] transition">
                                    FITLOG
                                </Link>
                            </h2>
                        </div>
                    </div>

                  {/* Desktop Navigation */}
<div className="hidden lg:flex items-center gap-4 text-sm font-medium">
    <ul className="flex gap-4">
        <li>
            <Link
                href="/"
                className="cursor-pointer text-[#C2F800] transition"
            >
                Workouts
            </Link>
        </li>

        <li>
            <Link
                href="/my-plan"
                className="cursor-pointer hover:text-[#C2F800] transition"
            >
                My Plan
            </Link>
        </li>
    </ul>
</div>

                    {/* Desktop Actions */}
                    <div className="flex items-center gap-6 text-[12px] ">

                        <button className=" font-medium cursor-pointer">
                            Plan{" "}
                            <span className="bg-[#b2da00] text-black  px-[10px] py-[2px] rounded-full">
                                0
                            </span>
                        </button>

                        <button className="font-medium cursor-pointer">
                            Saved{" "}
                            <span className="border border-white text-white font-medium px-[10px] py-[1px] rounded-full">
                                0
                            </span>
                        </button>

                    </div>



                </div>

                {/* Mobile & Tablet Menu */}
                {menuOpen && (
                    <div className="lg:hidden border-t border-gray-800 px-8 py-5">

                        <ul className="flex flex-col gap-5 text-white text-sm font-medium">

                            <li className="cursor-pointer hover:text-[#C2F800] transition">
                                Workouts
                            </li>

                            <li className="cursor-pointer hover:text-[#C2F800] transition">
                                My Plan
                            </li>

                            {/* <li>
                                <button className="cursor-pointer">
                                    Plan{" "}
                                    <span className="bg-[#b2da00] text-black px-3 py-1 rounded-full">
                                        0
                                    </span>
                                </button>
                            </li>

                            <li>
                                <button className="cursor-pointer">
                                    Saved{" "}
                                    <span className="border border-white text-white px-3 py-1 rounded-full">
                                        0
                                    </span>
                                </button>
                            </li> */}

                        </ul>

                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navmenu;