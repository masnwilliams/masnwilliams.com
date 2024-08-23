/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/newsletter',
      destination: 'https://learnbydoing.beehiiv.com/',
      permanent: false,
    },
    {
      source: '/podcast',
      destination: 'https://podcasters.spotify.com/pod/show/coding-in-context',
      permanent: false,
    },
  ],
}

module.exports = nextConfig
