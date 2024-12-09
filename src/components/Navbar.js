"use client";

import { menuItems } from "@/helpers/config";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import Sidebar from "./Sidebar";
import { MdKeyboardArrowDown } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="bg-black">
                <div className="lg:w-[75%] m-auto flex justify-between items-center text-white">
                    <div>
                        <p>Became searchable by top companies in your domain. Learn More</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-white">
                            <FaPhoneAlt />
                            <p>+ 84-65854332</p>
                        </div>
                        <div className="flex items-center gap-2 text-white">
                            <CiMail/>
                            <p>hello@super.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <header className="w-full bg-white shadow-md">
                <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:flex-row md:px-8 lg:w-[75%]">
                    <div className="flex items-center">
                        <button
                            className="mr-4 text-gray-700 md:hidden"
                            onClick={toggleSidebar}
                            aria-label="Toggle Menu"
                        >
                            <GiHamburgerMenu className="h-6 w-6" />
                        </button>
                        <div className="text-lg font-bold">
                            <Image
                                src={logo}
                                alt="logo"
                                className="h-10 w-20"
                            />
                        </div>
                    </div>
                    <div className="hidden w-full md:flex md:items-center md:justify-between">
                        <ul className="flex items-center space-x-6 px-2 lg:px-5">
                            {menuItems.map((item) => (
                                <li key={item.name} >
                                    <a
                                        href={item.href}
                                        className="text-[10px] lg:text-[16px]"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="ml-6 flex space-x-4">
                            <button className="text-black text-[12px] lg:text-[16px]">
                                Login
                            </button>
                            <button className="bg-[#027055] text-white px-2 py-2 rounded-full flex items-center justify-center gap-2 text-[12px] lg:text-[16px]">
                                <FaPlus className="h-4 w-4" />
                                Post a job
                            </button>
                        </div>
                    </div>
                    <Sidebar
                        isOpen={isOpen}
                        toggleSidebar={toggleSidebar}
                    />
                </nav>
            </header>
        </>
    );
}
