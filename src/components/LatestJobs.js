import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdWork } from "react-icons/md"; // Example icon for job position
import { LuCrown } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const LatestJobs = () => {
    const jobsData = [
        { id: 1, position: "Sr.Frontend Developer", company: "by TechCorp in Development & IT", favorite: false, country: "San Fransisxo", pay: "$110-140/month", remote: false, daysLeft: 150 },
        { id: 2, position: "Sr. Backend Go Developer", company: "by CodeStudio in Development & IT", favorite: false, country: "California", pay: "$210-240/month", remote: true, daysLeft: 120 },
        { id: 3, position: "UI/UX Designer", company: "by Designify in UI Development", favorite: false, country: "San Fransisxo", pay: "$110-120/month", remote: true, daysLeft: 120 },
        { id: 4, position: "Project Manager", company: "by BuildPro in Managenet", favorite: false, country: "Chicago", pay: "$210-240/month", remote: true, daysLeft: 130 },
    ];

    return (
        <div className="bg-white py-8 px-3">
            <div className="lg:w-[75%] m-auto">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <p className="font-bold text-[22px]">Latest Jobs</p>
                        <p className="font-light text-[14px]">2020 jobs live - 293 added today</p>
                    </div>
                    <div>
                        <p className="text-[14px] font-bold underline text-[#027055]">View all jobs</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {jobsData.map((job) => (
                        <div
                            key={job.id}
                            className="flex justify-between items-start  p-4 rounded-lg border border-yellow-500 h-[200px]"
                        >
                            <div className="flex flex-col gap-4 items-center">
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#027055] text-white p-4 rounded-full">
                                        <MdWork className="text-2xl" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[16px]">{job.position}</p>
                                        <p className="text-[14px] text-gray-500">{job.company}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5">
                                    {
                                        job?.remote === true && (
                                            <div className="bg-[#f8f1fc] rounded-full px-1 py-1">
                                                <p className="text-[#b1a0cd]">Remote</p>
                                            </div>
                                        )
                                    }

                                    <div className="flex items-center justify-center bg-[#edf1f1] gap-2 rounded-full px-1 py-1">
                                        <IoLocationOutline />
                                        <p className="text-[#027055]">{job?.country}</p>
                                    </div>
                                    <div className="flex items-center justify-center bg-[#edf1f1] gap-2 rounded-full px-1 py-1">
                                        {/* <IoLocationOutline /> */}
                                        <p className="text-[#027055]">{job?.pay}</p>
                                    </div>
                                </div>
                                <div className="flex items-start w-full gap-2 justify-start">
                                    <p className="text-[#027055] font-bold">{job?.daysLeft}</p>
                                    <p>days left to apply</p>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <button className="text-gray-400 hover:text-red-500">
                                    <LuCrown className="w-6 h-6 text-yellow-400" />
                                </button>
                                <button className="text-gray-400 hover:text-red-500">
                                    <CiHeart className="w-6 h-6 text-xl" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestJobs;
