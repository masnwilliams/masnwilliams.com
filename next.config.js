/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => [
        {
            source: '/newsletter',
            destination: 'https://themillennialspark.com/',
            permanent: false,
        },
    ],
}

module.exports = nextConfig
