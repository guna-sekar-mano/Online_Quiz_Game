/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js','jsx'],
    reactStrictMode: false,

    compiler: {
        styledComponents: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          pathname: '**',
        }
       
      ],
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/login',
            permanent: true,
          },
          {
            source: '/admin',
            destination: '/admin/dashboard',
            permanent: true,
          },
        ]
      },
      env: {
        LOCALSTORAGE_KEY:'quizapptoken',
        IMAGE_PATH:'http://localhost:1003',
        NEXT_SHARP_PATH: "/tmp/node_modules/sharp"
      },

      
}

module.exports = nextConfig
