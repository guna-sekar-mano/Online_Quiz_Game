/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js','jsx'],
  reactStrictMode: false,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  env:{
    SECRET_TOKEN:"Quiz_client",
    IMAGE_PATH:'http://localhost:1003',
    NEXT_SHARP_PATH: "/tmp/node_modules/sharp"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**',
      },
    
    ],

  },


 
}

module.exports = nextConfig
