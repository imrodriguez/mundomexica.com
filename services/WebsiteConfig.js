import { client } from "../lib/Contentful"

const getWebsiteConfig = () => {
    return client.getEntry('75UQXYWwDso22KX9fxBLE6');
};

export { getWebsiteConfig };