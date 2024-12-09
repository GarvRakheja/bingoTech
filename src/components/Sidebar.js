"use client";

import { menuItems } from "@/helpers/config";

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <>
            {isOpen && (
                <div className="absolute top-0 left-0 z-50 h-full w-64 bg-white shadow-md md:hidden">
                    <div className="flex justify-between px-4 py-3">
                        <span className="text-lg font-bold">Menu</span>
                        <button
                            className="text-gray-700"
                            onClick={toggleSidebar}
                            aria-label="Close Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <ul className="mt-6 space-y-4 px-4">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="block text-gray-700 hover:text-gray-900"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}
