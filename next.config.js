const redirects = require("./config/redirects.json");

module.exports = {
  async redirects() {
    return redirects;
  },
  images: {
    domains: ["images.ctfassets.net"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
};
