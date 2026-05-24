"use client";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
	return (
        <div className="mx-auto w-full   ">
            <nav className="flex items-center justify-between bg-white  w-full h-[72px] shadow-lg">
                <div className="w-1/2 bg-white h-full overflow-hidden">
                    <button className="h-full scale-130 w-[120px] mx-4">
                        <img src="https://internshala.com//static/images/internshala_og_image.jpg" alt="" />
                    </button>
                </div>
                <div className="w-1/2 bg-white">
                    <ul className="flex items-center justify-end h-full gap-5 hover:cursor-pointer  ">
                        <li className="flex items-center px-4 text-[#484848] font-[24px] gap-1.5 h-[72px] hover:text-[#00A5EC] hover:bg-[#c8ebfa] border-b-3 border-[#00A5EC] ">Internships<IoMdArrowDropdown /></li>
                        <li className="flex items-center  px-4 text-[#484848] font-[24px] gap-1.5 h-[72px] hover:text-[#00A5EC] hover:bg-[#c8ebfa]">Courses <span className="bg-[#FF8C00] h-[24px] text-white font-[12px] rounded-[5px]">OFFER</span> <IoMdArrowDropdown /></li>
                        <li className="flex items-center px-4 text-[#484848] font-[24px] gap-1.5 h-[72px] hover:text-[#00A5EC] hover:bg-[#c8ebfa]">Job<IoMdArrowDropdown /></li>
                        <li className="flex items-center px-4 text-[#484848] font-[24px] gap-1.5 h-[72px]  hover:text-[#00A5EC] hover:bg-[#c8ebfa]">Login / Register<IoMdArrowDropdown /></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;