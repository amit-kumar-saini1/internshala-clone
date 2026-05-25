"use client";
import Navbar from "../components/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { RiCouponLine } from "react-icons/ri";
import JobProfile from "../components/Jobprofile";
import { useEffect, useState } from "react";
import { getInternships } from "../../services/api";
import Filter from "../components/Filter";



function Internships() {
    const [jobData, setJobData] = useState(null);
    const [profile, setProfile] = useState("");
    const [location, setLocation] = useState("");
    const [minStipend, setMinStipend] = useState(0);
    useEffect(() => {
                const getData = async () => {
                        const data = await getInternships();
                        // console.log(data.internships_meta[65517].profile_name);
                        const allJobs = data.internship_ids.map((id) => {
                                return data.internships_meta[id];
                            });
                        setJobData(allJobs);
                };

        getData();
    }, []);

    
    useEffect(() => {
        console.log("Location:", location);
    }, [location]);

    const getJobStipendValue = (job) => {
        const sv1 = job?.stipend?.salary?.salaryValue1;
        if (typeof sv1 === "number") return sv1;
        if (typeof sv1 === "string" && sv1.trim() !== "") {
            const n = Number(sv1);
            if (!isNaN(n)) return n;
        }
        const raw = job?.stipend?.salary;
        if (typeof raw === "number") return raw;
        if (typeof raw === "string") {
            const digits = raw.replace(/[^0-9]/g, "");
            const n = Number(digits);
            if (!isNaN(n)) return n;
        }
        return 0;
    };

    const filteredJobs = jobData
        ? jobData.filter((job) => {
              const profileQuery = profile.trim().toLowerCase();
              const locationQuery = location.trim().toLowerCase();

              const profileMatch =   profileQuery === "" || (job.profile_name || "").toLowerCase().includes(profileQuery);

              const firstLocation = Array.isArray(job.location_names) && job.location_names.length > 0 ? (job.location_names[0] || "") : "";
              const locationMatch =
                  locationQuery === "" || firstLocation.toLowerCase().includes(locationQuery);

                            
                            const jobStipendValue = getJobStipendValue(job);
                            const stipendMatch = minStipend === 0 || jobStipendValue >= minStipend;

                            return profileMatch && locationMatch && stipendMatch;
          })
        : [];
    return (
        <div className="w-full bg-[#f8f8f8]">
            <Navbar />
            <div className="container mx-auto mt-8" style={{ width: "1225px" }}>
                <div className="flex flex-col items-center justify-center mx-auto gap-7" style={{ width: "956px" }}>
                    <div className="w-full flex justify-start">
                        <h5 className="flex items-center justify-items-start gap-2 text-[#666666] text-[14px]">
                            Home <IoIosArrowForward /> Internships
                        </h5>
                    </div>

                    <div className="w-full flex justify-end">
                        <div className="flex items-center gap-4 flex-col justify-center" style={{ width: "616px", height: "56px" }}>
                            <h1 className="text-[20px] font-bold">6821 Total Internships</h1>
                            <p className="text-[14px] text-[#666666]">Latest Summer Internships in India</p>
                        </div>
                    </div>

                    <div className="flex w-full  justify-between">
                        <div>   {/*  filleter part yaha par banega*/}
                            <Filter profile={profile} setProfile={setProfile} location={location} setLocation={setLocation} stipend={minStipend} setStipend={setMinStipend} />
                        </div>       
                        <div className="flex flex-col gap-8 ">          {/*   offer and job  cart layout box wala  */}
                            <div className="bg-white hover:shadow-lg hover:scale-103 duration-500 rounded-[15px] hover:cursor-pointer p-3" style={{ width: "616px", height: "182px" }}>
                                <div className="flex space-between items-center justify-between w-full">
                                    <h1 className="text-[18px] font-weight-[800]">
                                        Get Internship and Job Preparation training FREE!
                                    </h1>
                                    <span className="bg-[#FF8C00] text-white px-3 py-1 rounded-full text-[12px] font-weight-[800]">
                                        OFFER
                                    </span>
                                </div>
                                <p className="text-[14px] text-[#666666] py-2">By enrolling in trainings at 55% + 10% OFF</p>
                                <p className="text-[14px] text-[#666666] py-2 flex items-center gap-2"><RiCouponLine /> Use coupon: <span className="font-bold">GD10</span><CiClock2 /> Offer ends in 02d: 09h: 57s</p>
                                <p className="text-[14px] text-[#666666]">Choose from Web Dev., Python, Data Science, Marketing & more</p>
                                <div className="flex justify-between mt-4">
                                    <button className="bg-[#e8e8e8] text-[#666666] px-4 rounded-2xl">Government Certified Trainings</button>
                                    <h5 className="text-[14px] text-[#008BDC] font-bold flex items-center gap-1">Enroll now <IoMdArrowRoundForward /></h5>
                                </div>
                            </div>
                            {jobData ? (
                                filteredJobs.length > 0 ? (
                                    filteredJobs.map((job, index) => (
                                        <JobProfile key={index} {...job} />
                                    ))
                                ) : (
                                    <h1>No internships match your filters</h1>
                                )
                            ) : (
                                <h1>Loading...</h1>
                            )}
                            
                        </div>

                    </div>
                    {/* yaha pr filter banega */}
                </div>
            </div>
        </div>
    );
}

export default Internships;