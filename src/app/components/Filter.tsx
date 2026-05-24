import { CiFilter } from "react-icons/ci";




export default function Filter() {
    return (
        <div className="sticky top-20">
            <div className="h-[505px] w-[312px] bg-white rounded-[15px] p-5 ">
                <div className="flex items-center justify-center gap-2 mt-2">
                    <h1 className="flex items-center gap-2 text-4 text-[#484848] font-bold"> <CiFilter color="#007bff" font-bold  />Filters</h1>
                </div>
                <div className="flex flex-col ">
                    <h4 className="text-[16px] text-[#333333] mt-3.5">Profile</h4>
                    <input type="text" placeholder="e.g. Marketing" className="border border-gray-300 my-3 hover:border-[#008BDC] rounded-md py-2 px-4 w-full hover:border-blue-500" />
                    <h4 className="text-[16px] text-[#333333] mt-3.5">Location</h4>
                    <input type="text" placeholder="e.g. Delhi" className="border border-gray-300 my-3 hover:border-[#008BDC] rounded-md py-2 px-4 w-full hover:border-blue-500" />
                </div>
                <div className="flex flex-col mt-3.5 gap-5">
                    <div>
                        <input type="checkbox" name="workFromHome" className="mr-2 w-4 h-4 hover:cursor-pointer" />
                        <label  className="text-[16px] text-[#333333] cursor-pointer">Work from home</label>
                    </div>
                    <div>
                        <input type="checkbox"  className="mr-2 w-4 h-4 hover:cursor-pointer" />
                        <label  className="text-[16px] text-[#333333] cursor-pointer">Part-time</label>
                    </div>
                </div>
                <div>
                    <h3 className="text-[16px] text-[#333333] mt-4">Desired minimum monthly stipend (₹)</h3>
                    <input type="range" min="0" max="10000" className="w-full mt-4"/>
                    <div className="flex justify-between text-[14px] text-[#666666] mt-1">
                        <span>0</span>
                        <span>2K</span>
                        <span>4K</span>
                        <span>6K</span>
                        <span>8K</span>
                        <span>10K</span>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="text-[#008BDC] cursor-pointer">Clear all</button>
                    </div>
                </div>
            </div>
        </div>
    );
}