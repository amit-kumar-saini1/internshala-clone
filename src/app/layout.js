import "./globals.css";

export const metadata = {
  title: "Internshala Internship Search Clone",
  description: "Internship search experience built with Next.js, React, and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#f3f5f7] text-[#1f2b3d]">
        {children}
      </body>
    </html>
  );
}
