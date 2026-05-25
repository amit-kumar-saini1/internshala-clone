import "server-only";

const INTERNSHALA_SEARCH_URL = "https://internshala.com/hiring/search";
const INTERNSHALA_LOGO_BASE_URL = "https://internshala.com/uploads/logo/";

type InternshipMeta = {
  id: number;
  company_name?: string;
  company_logo?: string | null;
  duration?: string;
  employment_type?: string;
  expiring_in?: string;
  is_active?: boolean;
  labels_app_in_card?: string[];
  location_names?: string[];
  part_time?: boolean;
  posted_by_label?: string;
  profile_name?: string;
  start_date?: string;
  stipend?: {
    salary?: string;
    salaryValue1?: number | string | null;
  };
  url?: string;
  work_from_home?: boolean;
};

type InternshipSearchResponse = {
  internship_ids?: number[];
  internships_meta?: Record<string, InternshipMeta>;
};

export type Internship = {
  id: number;
  companyName: string;
  companyLogoUrl: string | null;
  duration: string;
  employmentType: string;
  expiringIn: string;
  isActive: boolean;
  labels: string[];
  locationNames: string[];
  partTime: boolean;
  postedByLabel: string;
  profileName: string;
  startDate: string;
  stipendText: string;
  stipendValue: number;
  url: string;
  workFromHome: boolean;
};

function getStipendValue(stipend?: InternshipMeta["stipend"]) {
  if (!stipend) {
    return 0;
  }

  const firstValue = stipend.salaryValue1;

  if (typeof firstValue === "number") {
    return firstValue;
  }

  if (typeof firstValue === "string") {
    const parsed = Number(firstValue);
    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }

  if (typeof stipend.salary === "string") {
    const digits = stipend.salary.replace(/[^\d]/g, "");
    const parsed = Number(digits);
    if (!Number.isNaN(parsed)) {
      return parsed;
    }
  }

  return 0;
}

function getCompanyLogoUrl(companyLogo?: string | null) {
  if (!companyLogo) {
    return null;
  }

  if (companyLogo.startsWith("http://") || companyLogo.startsWith("https://")) {
    return companyLogo;
  }

  return `${INTERNSHALA_LOGO_BASE_URL}${companyLogo}`;
}

function normalizeInternship(internship: InternshipMeta): Internship {
  return {
    id: internship.id,
    companyName: internship.company_name ?? "Confidential",
    companyLogoUrl: getCompanyLogoUrl(internship.company_logo),
    duration: internship.duration ?? "Not specified",
    employmentType: internship.employment_type ?? "internship",
    expiringIn: internship.expiring_in ?? "Apply soon",
    isActive: internship.is_active ?? false,
    labels: internship.labels_app_in_card ?? [],
    locationNames: internship.location_names ?? [],
    partTime: internship.part_time ?? false,
    postedByLabel: internship.posted_by_label ?? "Recently posted",
    profileName: internship.profile_name ?? "Internship",
    startDate: internship.start_date ?? "Starts immediately",
    stipendText: internship.stipend?.salary ?? "Not disclosed",
    stipendValue: getStipendValue(internship.stipend),
    url: internship.url ?? "",
    workFromHome: internship.work_from_home ?? false,
  };
}

export async function getInternships(): Promise<Internship[]> {
  const response = await fetch(INTERNSHALA_SEARCH_URL, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch internships: ${response.status}`);
  }

  const data = (await response.json()) as InternshipSearchResponse;
  const internshipIds = data.internship_ids ?? [];
  const internshipsMeta = data.internships_meta ?? {};

  return internshipIds
    .map((id) => internshipsMeta[String(id)])
    .filter(Boolean)
    .map(normalizeInternship);
}
