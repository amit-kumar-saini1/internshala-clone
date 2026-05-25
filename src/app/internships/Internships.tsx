"use client";

import { useDeferredValue, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { IoIosArrowForward, IoMdArrowRoundForward } from "react-icons/io";
import { RiCouponLine } from "react-icons/ri";
import type { Internship } from "../../services/api";
import Filter from "../components/Filter";
import JobProfile from "../components/Jobprofile";
import Navbar from "../components/Navbar";

type InternshipsProps = {
  internships: Internship[];
};

function getDurationInMonths(duration: string) {
  const match = duration.match(/\d+/);
  return match ? Number(match[0]) : 0;
}

export default function Internships({ internships }: InternshipsProps) {
  const internshipList = internships ?? [];
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [minStipend, setMinStipend] = useState(0);
  const [workFromHomeOnly, setWorkFromHomeOnly] = useState(false);
  const [partTimeOnly, setPartTimeOnly] = useState(false);

  const deferredProfile = useDeferredValue(profile);
  const deferredLocation = useDeferredValue(location);

  const filteredJobs = internshipList.filter((job) => {
    const profileQuery = deferredProfile.trim().toLowerCase();
    const locationQuery = deferredLocation.trim().toLowerCase();
    const requestedDuration = Number(duration);

    const profileMatch =
      profileQuery === "" || job.profileName.toLowerCase().includes(profileQuery);

    const locationMatch =
      locationQuery === "" ||
      job.locationNames.some((item) => item.toLowerCase().includes(locationQuery)) ||
      (job.workFromHome && "work from home".includes(locationQuery));

    const durationMatch =
      duration === "" || getDurationInMonths(job.duration) <= requestedDuration;

    const stipendMatch = job.stipendValue >= minStipend;
    const workFromHomeMatch = !workFromHomeOnly || job.workFromHome;
    const partTimeMatch = !partTimeOnly || job.partTime;

    return (
      profileMatch &&
      locationMatch &&
      durationMatch &&
      stipendMatch &&
      workFromHomeMatch &&
      partTimeMatch
    );
  });

  const activeFilterCount = [
    profile,
    location,
    duration,
    minStipend > 0 ? "stipend" : "",
    workFromHomeOnly ? "wfh" : "",
    partTimeOnly ? "part-time" : "",
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#f3f5f7] text-[#1f2b3d]">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 lg:px-6">
        <div className="flex items-center gap-2 text-sm text-[#6b7280]">
          <span>Home</span>
          <IoIosArrowForward className="text-xs" />
          <span className="font-medium text-[#2d3748]">Internships</span>
        </div>

        <section className="rounded-[28px] bg-linear-to-r from-[#ffffff] via-[#f6fbff] to-[#eef8ff] px-6 py-8 shadow-[0_24px_50px_rgba(14,30,62,0.08)] ring-1 ring-[#dbe8f4] lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-[#e7f4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0a66c2]">
                Internship Search
              </span>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#16324f] lg:text-4xl">
                Find internships that match your profile, city, budget, and timeline.
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#5f6f82]">
                A frontend-only filtered experience inspired by Internshala, with faster scanning and a cleaner responsive layout.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-[#e5edf5]">
                <p className="text-xs uppercase tracking-[0.16em] text-[#7b8794]">Results</p>
                <p className="mt-2 text-2xl font-semibold text-[#16324f]">{filteredJobs.length}</p>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-[#e5edf5]">
                <p className="text-xs uppercase tracking-[0.16em] text-[#7b8794]">Loaded</p>
                <p className="mt-2 text-2xl font-semibold text-[#16324f]">{internshipList.length}</p>
              </div>
              <div className="col-span-2 rounded-2xl bg-[#0a66c2] px-4 py-3 text-white shadow-sm sm:col-span-1">
                <p className="text-xs uppercase tracking-[0.16em] text-[#cfe8ff]">Filters</p>
                <p className="mt-2 text-2xl font-semibold">{activeFilterCount}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
          <Filter
            duration={duration}
            location={location}
            partTimeOnly={partTimeOnly}
            profile={profile}
            setDuration={setDuration}
            setLocation={setLocation}
            setPartTimeOnly={setPartTimeOnly}
            setProfile={setProfile}
            setStipend={setMinStipend}
            setWorkFromHomeOnly={setWorkFromHomeOnly}
            stipend={minStipend}
            workFromHomeOnly={workFromHomeOnly}
          />

          <div className="flex flex-col gap-5">
            <div className="rounded-[24px] bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] ring-1 ring-[#e6edf5]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="mb-3 inline-flex rounded-full bg-[#fff1df] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#d97706]">
                    Offer
                  </div>
                  <h2 className="text-xl font-semibold text-[#16324f]">
                    Get internship and job preparation training free with selected programs.
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#607080]">
                    Choose from web development, Python, data science, marketing, and more while keeping the search experience front and center.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f8fbff] px-4 py-3 text-sm text-[#46607a] ring-1 ring-[#deebf7]">
                  <p className="flex items-center gap-2">
                    <RiCouponLine className="text-[#0a66c2]" />
                    Coupon: <span className="font-semibold text-[#16324f]">GD10</span>
                  </p>
                  <p className="mt-2 flex items-center gap-2">
                    <CiClock2 className="text-[#0a66c2]" />
                    Offer ends in 02d : 09h : 57m
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="inline-flex w-fit rounded-full bg-[#eef5fb] px-4 py-2 text-sm font-medium text-[#516273]">
                  Government certified trainings
                </span>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0a66c2]"
                >
                  Enroll now
                  <IoMdArrowRoundForward className="text-base" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <div>
                <h2 className="text-lg font-semibold text-[#16324f]">
                  {filteredJobs.length} internships available
                </h2>
                <p className="text-sm text-[#6b7280]">
                  Filtered instantly on the frontend with no extra requests.
                </p>
              </div>
            </div>

            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobProfile key={job.id} internship={job} />)
            ) : (
              <div className="rounded-[24px] border border-dashed border-[#c7d6e5] bg-white px-6 py-10 text-center shadow-sm">
                <h3 className="text-lg font-semibold text-[#16324f]">
                  No internships match these filters
                </h3>
                <p className="mt-2 text-sm text-[#66788a]">
                  Try clearing one or two filters to widen the search.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
