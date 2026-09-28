const https = require('https');
https.get('https://unsplash.com/photos/person-in-white-dress-in-front-of-pink-building-6SgfEwkA02Y', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^"']*/g);
    console.log(match ? match[0] : 'Not found');
  });
});
