/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "internshala.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
