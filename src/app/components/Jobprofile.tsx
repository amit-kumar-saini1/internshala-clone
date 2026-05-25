import Image from "next/image";
import { CiCalendar, CiClock2 } from "react-icons/ci";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { MdOfflineBolt } from "react-icons/md";
import { PiMoneyWavyLight } from "react-icons/pi";
import type { Internship } from "../../services/api";

const PLACEHOLDER_LOGO =
  "https://internshala.com/static/images/search/placeholder_logo.svg";

type JobProfileProps = {
  internship: Internship;
};

export default function JobProfile({ internship }: JobProfileProps) {
  const locations =
    internship.locationNames.length > 0
      ? internship.locationNames.join(", ")
      : internship.workFromHome
        ? "Work from home"
        : "Location not specified";

  const tags = [
    ...internship.labels,
    internship.workFromHome ? "Work from home" : "",
    internship.partTime ? "Part-time" : "",
  ].filter(Boolean);

  return (
    <article className="group rounded-[24px] bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] ring-1 ring-[#e6edf5] transition hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(15,23,42,0.12)]">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full bg-[#edf7ed] px-3 py-1 text-xs font-semibold text-[#2f7d32]">
              Actively hiring
            </span>
            <span className="inline-flex rounded-full bg-[#eef5fb] px-3 py-1 text-xs font-medium text-[#4f657b]">
              {internship.employmentType}
            </span>
          </div>

          <h2 className="mt-4 text-xl font-semibold text-[#16324f]">
            {internship.profileName}
          </h2>
          <p className="mt-1 text-sm font-medium text-[#516273]">
            {internship.companyName}
          </p>
        </div>

        <div className="flex shrink-0 items-start justify-between gap-4">
          <div className="hidden text-right sm:block">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8aa0b6]">
              Posted
            </p>
            <p className="mt-1 text-sm font-semibold text-[#16324f]">
              {internship.postedByLabel}
            </p>
          </div>

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#e4edf6] bg-[#f8fbff] p-3">
            <Image
              src={internship.companyLogoUrl ?? PLACEHOLDER_LOGO}
              alt={`${internship.companyName} logo`}
              width={40}
              height={40}
              unoptimized
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 text-sm text-[#516273] sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex items-start gap-3">
          <IoLocationOutline className="mt-0.5 text-lg text-[#0a66c2]" />
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#8aa0b6]">Location</p>
            <p className="mt-1 text-sm font-medium text-[#23384d]">{locations}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <PiMoneyWavyLight className="mt-0.5 text-lg text-[#0a66c2]" />
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#8aa0b6]">Stipend</p>
            <p className="mt-1 text-sm font-medium text-[#23384d]">{internship.stipendText}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CiCalendar className="mt-0.5 text-lg text-[#0a66c2]" />
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#8aa0b6]">Duration</p>
            <p className="mt-1 text-sm font-medium text-[#23384d]">{internship.duration}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <HiOutlineAcademicCap className="mt-0.5 text-lg text-[#0a66c2]" />
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#8aa0b6]">Start date</p>
            <p className="mt-1 text-sm font-medium text-[#23384d]">{internship.startDate}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={`${internship.id}-${tag}`}
            className="rounded-full bg-[#eef5fb] px-3 py-1 text-xs font-medium text-[#4d647b]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3 border-t border-[#edf2f7] pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f1fff2] px-3 py-1.5 font-medium text-[#2f7d32]">
            <CiClock2 className="text-sm" />
            {internship.expiringIn}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fff7ea] px-3 py-1.5 font-medium text-[#9a6700]">
            <MdOfflineBolt className="text-sm" />
            Be an early applicant
          </span>
        </div>

        <a
          href={`https://internshala.com/internship/detail/${internship.url}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-[#cfe3f6] px-4 py-2 text-sm font-semibold text-[#0a66c2] transition hover:border-[#0a66c2] hover:bg-[#f7fbff]"
        >
          View details
        </a>
      </div>
    </article>
  );
}
