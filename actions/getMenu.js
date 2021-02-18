require('dotenv').config();
const fs = require('fs');
const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
  })

const writeData = async () => {
    const cats = await client.getEntries({
        content_type: 'category'
    });

    fs.writeFileSync('./config/menu.json', JSON.stringify(cats.items));
};

writeData();
