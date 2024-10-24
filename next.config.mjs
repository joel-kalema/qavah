/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['firebasestorage.googleapis.com'], // Allow Firebase Storage domain for images
    },
  };
  
  export default nextConfig;