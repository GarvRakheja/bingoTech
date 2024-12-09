"use client"
import { carousalData } from '@/helpers/config';
import React, { useState } from 'react'
import cardimage from "../assets/images/card.png"
import Carousal from './Carousal';
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

const CarosalCard = () => {
    const [startIndex, setStartIndex] = useState(0);

    const showNextCards = () => {
        if (startIndex + 4 < carousalData.length) {
            setStartIndex(startIndex + 4);
        }
    };

    const showPrevCards = () => {
        if (startIndex - 4 >= 0) {
            setStartIndex(startIndex - 4);
        }
    };
    return (

        <div className="bg-[#f9f9f9]">
            <div className="lg:w-[75%] m-auto px-4 relative flex flex-col gap-2">
                <div className='flex justify-between items-end'>
                    <div>
                        <p className='font-bold text-[22px]'>Popular Category</p>
                        <p className='font-light text-[14px]'>2020 jobs live - 293 added today</p>
                    </div>
                    <div>
                        <p className='text-[14px] font-bold underline text-[#027055]'>View all categories</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {carousalData.slice(startIndex, startIndex + 4).map((item) => (
                        <Carousal
                            key={item.id}
                            icon={item.icon}
                            text1={item.text1}
                            text2={item.text2}
                            text3={item.text3}
                        />
                    ))}
                </div>
                <div className="absolute left-0 top-[60%] transform -translate-y-1/2">
                    <button
                        onClick={showPrevCards}
                        className="bg-white text-white p-2 rounded-full"
                    >
                        <IoIosArrowBack className='w-6 h-6 text-black' />
                    </button>
                </div>

                <div className="absolute right-0 top-[60%] transform -translate-y-1/2">
                    <button
                        onClick={showNextCards}
                        className="bg-white text-white p-2 rounded-full"
                    >
                        <MdArrowForwardIos className='w-6 h-6 text-black' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarosalCard