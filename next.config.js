/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => [
        {
            source: '/newsletter',
            destination: 'https://themillenialmanifest.com',
            permanent: false,
        },
    ],
}

module.exports = nextConfig
