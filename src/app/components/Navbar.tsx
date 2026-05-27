"use client";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
     const handleToggle = () => {
        setToggle(!toggle);
    };
	return (
        <div className="sticky top-0 z-50 w-full ">
            <div className=" w-full h-full fixed bg-[rgba(0,0,0,0.7)] z-20 duration-500" style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? "visible" : "hidden"
                }} onClick={handleToggle}>
                <div className="w-[65%] bg-white h-full " onClick={(e) => e.stopPropagation()} >
                    <div>
                        <ul className="flex flex-col items-start justify-start h-full gap-6 p-6 pt-10 text-[18px] text-[#484848] ">
                            <li>Home</li>
                            <li>Internships</li>
                            <li>Jobs</li>
                            <li>Courses</li>
                            <li>Career Launchpads</li>
                            <li>Online Degrees</li>
                            <li>Study Abroad</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div  className=" block lg:hidden">
                <div className="mx-auto w-full  max-w-[1650px]">
                    <nav className="flex items-center justify-between bg-white  w-full h-[72px] shadow-lg px-5">
                        <div className="w-1/2 bg-white h-full overflow-hidden flex  items-center">
                            <GiHamburgerMenu className=" text-[#858585] text-[24px]  cursor-pointer" 
                            onClick={handleToggle} />
                            
                            <button className="h-full scale-130 w-[120px] mx-4 mb-3  cursor-pointer">
                                <img src="https://internshala.com//static/images/internshala_og_image.jpg" alt="" />
                            </button>
                        </div>
                        <div className="w-1/2 w-[97px] h-[31px] px-3 py-3 rounded-[5px] flex items-center justify-center bg-[#00A5EC] t">
                            <button className=" text-white h-full w-full items-center pb-[21px]"> Register</button>
                        </div>
                    </nav>
                </div>
                
            </div>
            <div className="hidden lg:block  ">
                <div className="mx-auto w-full  max-w-[1650px]">
                    <nav className="flex items-center justify-between bg-white  w-full h-[72px] shadow-lg">
                        <div className="w-1/2 bg-white h-full overflow-hidden">
                            <button className="h-full scale-130 w-[120px] mx-4 cursor-pointer">
                                <img src="https://internshala.com//static/images/internshala_og_image.jpg" alt="" />
                            </button>
                        </div>
                        <div className="w-1/2 bg-white">
                            <ul className="flex items-center justify-end h-full gap-5 hover:cursor-pointer  ">
                                <li className="flex items-center px-4 text-[#484848] font-[24px] gap-1.5 h-[72px] hover:text-[#00A5EC] hover:bg-[#c8ebfa] border-b-3 border-[#00A5EC] ">Internships<IoMdArrowDropdown /></li>
                                <li className="flex items-center  px-4 text-[#484848] font-[24px] gap-1.5 h-[72px] hover:text-[#00A5EC] hover:bg-[#c8ebfa]">Courses <span className="bg-[#FF8C00] h-[24px] text-white text-[12px] px-1  pt-1 rounded-[5px]">OFFER</span> <IoMdArrowDropdown /></li>
                                <li className="flex items-center px-4 text-[#484848] font-[24px] gap-1.5 h-[72px]  hover:text-[#00A5EC] hover:bg-[#c8ebfa]">Login / Register<IoMdArrowDropdown /></li>
                                <li className="flex items-center px-4 text-[#484848] font-[24px] gap-1.5 h-[72px] hover:text-[#00A5EC] hover:bg-[#c8ebfa]">Job<IoMdArrowDropdown /></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;