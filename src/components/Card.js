import Image from 'next/image';
import React from 'react';

const Card = ({ text1, text2, buttonText, imageSrc }) => {
    return (
        <div className="flex flex-col md:flex-row items-center  bg-[#fee7df] shadow-lg rounded-lg p-4 lg:py-0 gap-4 md:gap-6">
            {/* Left side (Text and Button) */}
            <div className="flex flex-col items-center text-center md:text-left md:items-start gap-4 md:w-1/2">
                <h3 className="text-xl font-bold">{text1}</h3>
                <p className="text-sm text-gray-600">{text2}</p>
                <button className="bg-[#027055] text-white px-4 py-2 rounded-full hover:bg-[#025a46]">
                    {buttonText}
                </button>
            </div>

            {/* Right side (Image) */}
            <div className="md:w-1/2">
                <Image src={imageSrc} alt="Card Image" className="w-full h-60 rounded-lg object-cover" />
            </div>
        </div>
    );
};

export default Card;
