import { IoMdArrowDropdown } from "react-icons/io";

const navItems = [
  { label: "Internships", active: true },
  { label: "Courses", active: false, badge: "Offer" },
  { label: "Jobs", active: false },
  { label: "Login / Register", active: false },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e6edf5] bg-white/92 backdrop-blur">
      <nav className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0a66c2] text-sm font-bold tracking-[0.18em] text-white">
            IS
          </div>
          <div>
            <p className="text-sm font-semibold text-[#16324f]">Internshala Search</p>
            <p className="text-xs text-[#728197]">Internship discovery</p>
          </div>
        </div>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                type="button"
                className={`flex h-12 items-center gap-1 rounded-full px-4 text-sm font-medium transition ${
                  item.active
                    ? "bg-[#eaf5ff] text-[#0a66c2]"
                    : "text-[#425466] hover:bg-[#f5f8fb] hover:text-[#16324f]"
                }`}
              >
                {item.label}
                {item.badge ? (
                  <span className="rounded-full bg-[#ffedd5] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#c2410c]">
                    {item.badge}
                  </span>
                ) : null}
                <IoMdArrowDropdown className="text-base" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
