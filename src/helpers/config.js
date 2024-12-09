import { FaGithub } from "react-icons/fa";
import { RiNotionLine } from "react-icons/ri";
import { CiSquareChevDown } from "react-icons/ci";
import card from "../assets/images/card.png"
import { FaCode } from "react-icons/fa";
import { FaCentercode } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa"
import { IoBarcode } from "react-icons/io5";
export const menuItems = [
    {
        name: "Products",
        href: "/",
    },
    {
        name: "Industries",
        href: "/",
    },
    {
        name: "Services",
        href: "/",
    }, {
        name: "Resources",
        href: "/",
    }, {
        name: "About",
        href: "/",
    }, {
        name: "Contact Us",
        href: "/",
    }, {
        name: "Start Free",
        href: "/",
    }
];

export const leadingBrands = [
    {
        id: 1,
        icon: FaGithub,
        name: "GitHub"
    },
    {
        id: 2,
        icon: CiSquareChevDown,
        name: "square"
    },
    {
        id: 3,
        icon: RiNotionLine,
        name: "Notion"
    }
]

// helpers/config.js
export const cardData = [
    {
        id: 1,
        text1: "For Employes",
        text2: "Find professionals from around the world and accross all skills.",
        buttonText: "Post jobs for free",
        imageSrc: card,
    },
    {
        id: 2,
        text1: "For Candidade",
        text2: "Build your professional profile.",
        buttonText: "upload your cv",
        imageSrc: card,
    }
];

export const carousalData = [
    { id: 1, icon: FaCode, text1: "development & It", text2: "16 jobs", text3: "Frontend, Backend, web and app developer jobs" },
    { id: 2, icon: FaCentercode, text1: "Market & Sales", text2: "8 jobs", text3: "Advertising, digital marketing" },
    { id: 3, icon: FaCodepen, text1: "Design & Creative", text2: "13 jobs", text3: "customer experiance and account management jobs" },
    { id: 4, icon: FaLaptopCode, text1: "account", text2: "10 jobs", text3: "junior accountant, senior accountant" },
    { id: 5, icon: IoBarcode, text1: "Grapic Designer", text2: "20 jobs", text3: "junior graphic designer , senior graphic designer" },
    { id: 6, icon: IoBarcode, text1: "Grapic Designer", text2: "20 jobs", text3: "junior graphic designer , senior graphic designer" },
    { id: 7, icon: IoBarcode, text1: "Grapic Designer", text2: "20 jobs", text3: "junior graphic designer , senior graphic designer" },
    { id: 8, icon: IoBarcode, text1: "Grapic Designer", text2: "20 jobs", text3: "junior graphic designer , senior graphic designer" },
];




