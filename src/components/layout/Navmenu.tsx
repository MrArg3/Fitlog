"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png";
import hamburger from "@/app/assets/icon/hamburger.svg";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";

const Navmenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { myplan, saved } = useContext(WorkoutContext);

    return (
        <nav className="relative sticky top-0 z-50 border-b border-gray-800/75 bg-[#0f1115]/80 backdrop-blur-md">
            <div className="mx-auto max-w-6xl">

                {/* Main Navbar */}
                <div className="flex items-center justify-between px-4 py-4 text-white sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8">

                    {/* Logo + Hamburger */}
                    <div className="flex items-center gap-4">

                        {/* Hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex items-center justify-center lg:hidden"
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                        >
                            <Image
                                src={hamburger}
                                alt="Menu"
                                width={28}
                                height={28}
                            />
                        </button>

                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <Image
                                src={logo}
                                alt="FITLOG Logo"
                                width={20}
                                height={30}
                            />

                            <h2 className="font-oswald text-xl">
                                <Link
                                    href="/"
                                    className="cursor-pointer transition hover:text-[#C2F800]"
                                >
                                    FITLOG
                                </Link>
                            </h2>
                        </div>

                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center justify-center lg:flex">
                        <ul className="flex items-center gap-8 text-sm font-medium">

                            <li>
                                <Link
                                    href="/"
                                    className="cursor-pointer text-[#C2F800] transition hover:text-[#C2F800]"
                                >
                                    Workouts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/my-plan"
                                    className="cursor-pointer transition hover:text-[#C2F800]"
                                >
                                    My Plan
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Plan + Saved */}
                    <div className="flex items-center justify-end gap-4 text-[12px] sm:gap-6 lg:justify-self-end">

                        {/* Plan */}
                        <Link
                            href="/my-plan"
                            className="cursor-pointer font-medium"
                        >
                            Plan{" "}
                            <span className="rounded-full bg-[#b2da00] px-[10px] py-[2px] text-black">
                                {myplan.length}
                            </span>
                        </Link>

                        {/* Saved */}
                        <Link
                            href="/my-plan"
                            className="cursor-pointer font-medium"
                        >
                            Saved{" "}
                            <span className="rounded-full border border-white px-[10px] py-[1px] text-white">
                                {saved.length}
                            </span>
                        </Link>

                    </div>

                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    className={`absolute left-0 top-full z-50  overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
                        menuOpen
                            ? "max-h-[300px] translate-y-0 opacity-100"
                            : "max-h-0 -translate-y-2 opacity-0"
                    }`}
                >
                    <ul className="mx-4 rounded-2xl text-[12px] font-light border border-gray-700/50 bg-[#1a1d23] p-2 w-[200px]  shadow-xl">

                        {/* Workouts */}
                        <li>
                            <Link
                                href="/"
                                className="block rounded-xl py-1 pl-3 text-white transition duration-300 hover:bg-gray-800 hover:text-[#C2F800]"
                                onClick={() => setMenuOpen(false)}
                            >
                                Workouts
                            </Link>
                        </li>

                        {/* My Plan */}
                        <li>
                            <Link
                                href="/my-plan"
                                className="block rounded-xl py-1 pl-3 text-white transition duration-300 hover:bg-gray-800 hover:text-[#C2F800]"
                                onClick={() => setMenuOpen(false)}
                            >
                                My Plan
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navmenu;