import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { PiClockClockwiseLight } from "react-icons/pi";
import { MdOfflineBolt } from "react-icons/md";

const PLACEHOLDER_LOGO = "https://internshala.com/static/images/search/placeholder_logo.svg";

const JobProfile = (props) => {
    return (
        <div>
            <div className="w-154 bg-white h-50 hover:shadow-lg hover:scale-103 duration-500 rounded-[15px] hover:cursor-pointer p-3 overflow-hidden">  
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-bold-[600]">{props.profile_name}</h1>
                        <p className="text-[13px] text-[#8A8A8A]  pt-0.5">{props.company_name} <span className="text-[#007bff] border border-[#007bff] rounded-[5px] p-1 text-[10px]">Actively hiring</span></p>
                    </div>
                    <div className="h-12 w-12">
                        <img src={PLACEHOLDER_LOGO || props.company_logo} alt=""/>
                    </div>
                </div>   
                <div>
                    <p className="text-[13px] text-[#8A8A8A] py-1.5 flex items-center gap-2"> <IoLocationOutline />{props.location_names[0]} <FaIndianRupeeSign />{props.stipend.salary}{" "}<CiCalendar />{props.duration} </p>   
                    <p className="text-[13px] text-[#8A8A8A] py-1.5 overflow-hidden ">1. Fabricate prototypes, conduct testing, and work with sheet metal and other mechanical structures</p>   
                    <p className="text-[13px] text-[#8A8A8A] py-1.5">AutoCAD <span>. SolidWorks</span> <span>. Autodesk Fusion 360</span><span>. CAD</span> </p>
                </div>
                <div className=" flex  items-center gap-4 mt-3">
                    <h3 className="text-[12px] bg-[#f1ffe5] text-[#28a745] rounded-full px-1.5 items-center flex items-center gap-2"> <PiClockClockwiseLight  className="text-[18px]"/>Just now</h3>
                    <h3 className="text-[12px] bg-[#e8e8e8] rounded-full px-1.5  items-center flex items-center gap-2 "><MdOfflineBolt className="text-amber-300 text-[18px]" />Be an early applicant</h3>
                </div>                           
            </div>
        </div>
    );
};

export default JobProfile;