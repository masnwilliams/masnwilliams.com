/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => [
        {
            source: '/newsletter',
            destination: 'https://lbdnewsletter.com/',
            permanent: false,
        },
        {
            source: '/podcast',
            destination: 'https://lbdpodcast.com/',
            permanent: false,
        }
    ],
}

module.exports = nextConfig
