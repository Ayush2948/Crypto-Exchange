import React, { useState } from "react";
import logo from '../../images/logo.svg';

const TeamMemberCard = ({ name, regNo, color = "bg-[#2952e3]" }) => {
    const [showRegNo, setShowRegNo] = useState(false);

    return (
        <div 
            className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl min-w-[200px]"
            onClick={() => setShowRegNo(!showRegNo)}
        >
            <div className={`w-10 h-10 flex justify-center items-center text-white ${color}`}>
                {name.charAt(0)}
            </div>
            <div className="ml-5 flex flex-col flex-1">
                <h3 className="mt-2 text-white text-lg">
                    {showRegNo ? regNo : name}
                </h3>
            </div>
        </div>
    );
};

const Footer = () => {
    const teamMembers = [
        { name: "Harsh Patel", regNo: "21BKT015", color: "bg-[#2952e3]" },
        { name: "Ayush Patil", regNo: "21BCT0330", color: "bg-[#8945F8]" },
        { name: "Pranav Phadatare", regNo: "21BCE2694", color: "bg-[#F84550]" },
    ];

    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer pt-[50px]">
                      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5pt-[50px]" />


            <div className="flex flex-[0.5] justify-center items-center pt-[50px] ">
                <img src={logo} alt="logo" className="w-48" />
            </div>

            {/* Project Description Section */}
            <div className="flex flex-col items-center mt-8 w-full max-w-[800px]">
                <h1 className="text-white text-lg font-semibold mb-3">
                    About The Project
                </h1>
                <p className="text-white text-center text-sm leading-6 mb-8">
                    This project is a cryptocurrency exchange platform built with modern web technologies. 
                    Users can connect their crypto wallets, view live cryptocurrency prices, and send 
                    crypto assets across the blockchain. The platform includes a responsive frontend, 
                    a smart contract backend, and live crypto price updates.
                </p>
            </div>

            {/* Team Members Section */}
            <div className="flex flex-col items-center w-full">
                <h1 className="text-white text-lg font-semibold mb-3">
                    Our Team
                </h1>
                <p className="text-gray-400 text-sm mb-4">(Click on cards to reveal registration numbers)</p>
                <div className="flex flex-row justify-center flex-wrap w-full max-w-[1000px] mt-4">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            regNo={member.regNo}
                            color={member.color}
                        />
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center flex-col mt-8">
                <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
                <p className="text-transparent text-sm text-center font-medium mt-2"></p>
            </div>

            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="text-white text-left text-xs">@VIT2025</p>
                <p className="text-white text-right text-xs">All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;
