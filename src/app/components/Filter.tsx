"use client";

import { CiFilter } from "react-icons/ci";

type FilterProps = {
  duration: string;
  location: string;
  partTimeOnly: boolean;
  profile: string;
  setDuration: (value: string) => void;
  setLocation: (value: string) => void;
  setPartTimeOnly: (value: boolean) => void;
  setProfile: (value: string) => void;
  setStipend: (value: number) => void;
  setWorkFromHomeOnly: (value: boolean) => void;
  stipend: number;
  workFromHomeOnly: boolean;
};

const durationOptions = [
  { label: "Any duration", value: "" },
  { label: "1 month", value: "1" },
  { label: "3 months", value: "3" },
  { label: "6 months", value: "6" },
  { label: "12 months", value: "12" },
];

export default function Filter({
  duration,
  location,
  partTimeOnly,
  profile,
  setDuration,
  setLocation,
  setPartTimeOnly,
  setProfile,
  setStipend,
  setWorkFromHomeOnly,
  stipend,
  workFromHomeOnly,
}: FilterProps) {
  const clearFilters = () => {
    setProfile("");
    setLocation("");
    setDuration("");
    setStipend(0);
    setWorkFromHomeOnly(false);
    setPartTimeOnly(false);
  };

  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-[24px] bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ring-1 ring-[#e6edf5]">
        <div className="flex items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-[#16324f]">
            <CiFilter className="text-xl text-[#0a66c2]" />
            Filters
          </h2>
          <button
            type="button"
            onClick={clearFilters}
            className="text-sm font-semibold text-[#0a66c2]"
          >
            Clear all
          </button>
        </div>

        <div className="mt-5 space-y-5">
          <label className="block">
            <span className="text-sm font-medium text-[#344054]">Profile</span>
            <input
              type="text"
              placeholder="e.g. Marketing"
              value={profile}
              onChange={(event) => setProfile(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-[#d8e2ec] bg-[#fbfdff] px-4 py-3 text-sm text-black placeholder:text-gray-500 outline-none transition focus:border-[#0a66c2] focus:bg-white"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#344054]">Location</span>
            <input
              type="text"
              placeholder="e.g. Delhi or Work from home"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-[#d8e2ec] bg-[#fbfdff] px-4 py-3 text-sm text-black placeholder:text-gray-500 outline-none transition focus:border-[#0a66c2] focus:bg-white"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-[#344054]">Maximum duration</span>
            <select
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-[#d8e2ec] bg-[#fbfdff] px-4 py-3 text-sm text-[#16324f] outline-none transition focus:border-[#0a66c2] focus:bg-white"
            >
              {durationOptions.map((option) => (
                <option key={option.value || "all"} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <div className="space-y-3 rounded-2xl bg-[#f8fbff] p-4">
            <label className="flex items-center gap-3 text-sm text-[#344054]">
              <input
                type="checkbox"
                checked={workFromHomeOnly}
                onChange={(event) => setWorkFromHomeOnly(event.target.checked)}
                className="h-4 w-4 rounded border-[#c4d3e0]"
              />
              Work from home only
            </label>

            <label className="flex items-center gap-3 text-sm text-[#344054]">
              <input
                type="checkbox"
                checked={partTimeOnly}
                onChange={(event) => setPartTimeOnly(event.target.checked)}
                className="h-4 w-4 rounded border-[#c4d3e0]"
              />
              Part-time only
            </label>
          </div>

          <div>
            <div className="flex items-center justify-between text-sm font-medium text-[#344054]">
              <span>Minimum monthly stipend</span>
              <span className="text-[#0a66c2]">Rs. {stipend.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min={0}
              max={50000}
              step={1000}
              value={stipend}
              onChange={(event) => setStipend(Number(event.target.value))}
              className="mt-4 w-full accent-[#0a66c2]"
            />
            <div className="mt-2 flex justify-between text-xs text-[#7b8794]">
              <span>0</span>
              <span>10K</span>
              <span>20K</span>
              <span>30K</span>
              <span>40K</span>
              <span>50K</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
