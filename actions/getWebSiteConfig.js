require('dotenv').config();
const fs = require('fs');
const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
  })

const writeData = async () => {
    const data = await client.getEntries({
        content_type: 'websiteConfig'
    });

    fs.writeFileSync('./config/generalData.json', JSON.stringify(data.items[0].fields));
};

writeData();



