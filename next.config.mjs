/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This tells Next.js to generate static files
  trailingSlash: true, // Ensures all paths have trailing slashes for static file compatibility
};

export default nextConfig;
