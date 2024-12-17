import express from 'express';
import pug from 'pug';

// Import and configure dotenv using ES6 syntax
import 'dotenv/config';//accessing api key locally using env file

console.log(process.env.API_KEY);

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
