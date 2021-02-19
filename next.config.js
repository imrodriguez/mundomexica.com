const redirects = require('./config/redirects.json');

module.exports = {
    async redirects() {
        return redirects;
    },
}