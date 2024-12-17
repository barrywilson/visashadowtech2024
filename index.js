import express from 'express';
import pug from 'pug';

const apiKey = process.env.MY_SECRET_KEY;

if (!apiKey) {
  console.error('API Key is missing!');  
}

// Use the API key for making requests to an API
console.log('API Key:', apiKey);

const app = express();
const port = 3000;

app.set('view engine', pug);

app.get('/', (req, res) => {
    const dynamicData = {
        name: 'John Doe',
        age: 30,
        hobbies: ['coding', 'reading', 'gaming']
    };

    res.render('index.pug', { dynamicData });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
