/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
    generateRobotsTxt: true,
    exclude: [
      '/contact/thank-you', 
      '/formal-booking/thank-you',
      '/makeup-palace-bridal-bookings/thank-you',
      '/online-bookings/thank-you',
      '/makeup-palace-bridal-bookings',
      '/formal-booking',
      '/jsonId'
    ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
        }
      ]
    }
  }
  
  module.exports = config
  //export default config