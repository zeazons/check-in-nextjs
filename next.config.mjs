/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/*",
      },
      {
        protocol: "https",
        hostname: "zixghazlkfcxaukoqluk.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/checkin/employee/*",
      },
    ],
  },
};

export default nextConfig;
