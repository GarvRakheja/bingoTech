"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import home from "../assets/images/Home.png"
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { cardData, carousalData, leadingBrands } from '@/helpers/config';
import { IoMdSettings } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import Card from './Card';
import cardimage from "../assets/images/card.png"
import Carousal from './Carousal';
import CarosalCard from './CarosalCard';
import LatestJobs from './LatestJobs';

const Home = () => {

    return (
        <div className='bg-[#ecf2f0] '>
            <div className=' lg:w-[75%] flex flex-col justify-center items-center gap-3 px-3 md:flex-row md:py-10 m-auto lg:justify-between'>
                <div>
                    <Image
                        src={home}
                        alt="home"
                        height={250}
                        width={250}
                        className="lg:w-[500px] lg:h-[500px] md:hidden"

                    />
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col justify-center items-center gap-2 md:items-start md:gap-4'>
                        <ul className='flex flex-col '>
                            <li className='text-[30px] md:text-[36px] lg:text-[40px] font-bold'>Got Talent ?</li>
                            <li className='text-[30px] md:text-[36px] lg:text-[40px] font-bold'>Meet Opportunity</li>
                            <li className='text-[12px] md:text-[16px] lg:text-[18px] font-light'>Company reviews, Salaries, Interviews, Jobs</li>
                        </ul>
                        <div className='bg-white flex items-center rounded-full px-2 py-1 gap-2 md:py-2'>
                            <div className='flex justify-center items-center gap-1 text-[10px] md:text-[16px]' >
                                <CiSearch className='h-4 w-4 md:h-6 md:w-6' />
                                <input
                                    placeholder='Job title or Keywords'
                                    className='border-r'
                                />
                            </div>
                            <div className='flex justify-center items-center gap-1 text-[10px] md:text-[16px]'>
                                <IoLocationOutline className='h-6 w-6' />
                                <p>All Locations</p>
                            </div>
                            <div>
                                <button className='bg-[#027055] text-white rounded-full px-2 py-2'>
                                    <p>Search</p>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center text-center md:text-start md:items-start'>
                            <p className='text-[10px] md:text-[13px]'>Popular Searches:</p>
                            <p className='text-[10px] md:text-[13px] font-bold'>Data Management, Marketing Management, Customer Support</p>
                        </div>
                    </div>
                    <div className='flex-col flex justify-center items-center md:items-start md:gap-1'>
                        <h1 className='text-[12px]'>Trusted by leading brands and startups</h1>
                        <div className="flex items-center gap-3">
                            {leadingBrands.map((brand) => (
                                <div
                                    key={brand.id}
                                    className="flex items-center gap-1"
                                >
                                    <brand.icon className="md:w-8 md:h-8 " />
                                    <span className="">
                                        {brand.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src={home}
                        alt="home"
                        height={250}
                        width={250}
                        className="lg:w-[500px] lg:h-[500px] hidden md:block"

                    />
                </div>
                <div className='hidden lg:flex flex-col gap-3 '>
                    <button className='bg-white px-2 py-2 rounded text-black flex flex-col items-center justify-center gap-1'>
                        <IoMdSettings />
                        <p>demos</p>
                    </button>
                    <button className='bg-[#82b53b] px-2 py-2 rounded text-white flex flex-col items-center justify-center gap-1'>
                        <FaCartShopping />
                        <p>Buy Now</p>
                    </button>
                </div>
            </div>
            <div className="bg-[#f9f9f9] py-8 flex flex-col gap-5">
                <div className=" grid grid-cols-1 px-3 gap-6 md:px-0 md:grid-cols-2 lg:grid-cols-3px-4 container mx-auto lg:w-[75%]">
                    {cardData.map((item) => (
                        <Card
                            key={item.id}
                            text1={item.text1}
                            text2={item.text2}
                            buttonText={item.buttonText}
                            imageSrc={cardimage}
                        />
                    ))}
                </div>
                <CarosalCard />
            </div>
            <LatestJobs/>
        </div>
    )
}

export default Home