/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    reactRemoveProperties: true,
    // removeConsole: {
    //   exclude: ['error'],
    // },
  }
}

module.exports = nextConfig
