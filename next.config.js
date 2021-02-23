const redirects = require("./config/redirects.json");

module.exports = {
  async redirects() {
    return redirects;
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};
