/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.bestwebsitesdaytona.com", // Replace with your site's URL
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  sitemapSize: 5000, // Limit entries per sitemap file
  changefreq: "daily", // Optional: Frequency of changes (daily, weekly, monthly, etc.)
  priority: 0.7, // Optional: Priority of URLs
  exclude: ["/secret-page", "/admin/*"], // Optional: Exclude specific pages
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.bestwebsitesdaytona.com/sitemap-0.xml", // Additional sitemaps if any
    ],
  },
};
