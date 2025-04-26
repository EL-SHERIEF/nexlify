/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nexlify-next.vercel.app', // Replace with your site's domain
  generateRobotsTxt: true, // Generates a robots.txt file
  sitemapSize: 7000, // Max URLs per sitemap file
  changefreq: 'daily', // Default change frequency
  priority: 1, // Default priority
  exclude: ['/secret-page'], // Exclude specific pages
  // Optional: Transform for dynamic routes
  transform: async (config, path) => {
    return {
      loc: path, // URL path
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(), // Last modified date
    };
  },
};