/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This tells Next.js to generate static files
  trailingSlash: true, // Adding trailing slashes for better compatibility with static file servers
};

export default nextConfig;
