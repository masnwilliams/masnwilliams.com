/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => [
        {
            source: '/newsletter',
            destination: 'https://learnbydoing.beehiiv.com/',
            permanent: false,
        },
        // {
        //     source: '/podcast',
        //     destination: 'https://lbdpodcast.com/',
        //     permanent: false,
        // }
    ],
}

module.exports = nextConfig
