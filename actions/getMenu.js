require('dotenv').config();
const fs = require('fs');
const client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_TOKEN,
  })

const writeData = async () => {
    const data = await client.getEntries({
        content_type: 'page',
        order: "fields.order"
    });

    const cats = await client.getEntries({
        content_type: 'category'
    });

    let items = cats.items.concat(data.items);
    

    fs.writeFileSync('./config/menu.json', JSON.stringify(items));
};

writeData();
