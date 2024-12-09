import React from 'react';

const Carousal = ({ icon, text1, text2, text3 }) => {
    return (
        <div className="flex flex-col items-start bg-[#ecf2f0] shadow-lg rounded-lg p-4 gap-4">
            <div className=" bg-[#037a57] p-3 text-white rounded-full shadow-md">
                 {icon && React.createElement(icon)}
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold">{text1}</h3>
                <p className="text-sm text-gray-600">{text2}</p>
                <p className="text-sm text-gray-600">{text3}</p>
            </div>
        </div>
    );
};

export default Carousal;
