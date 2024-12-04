const express = require('express');
const pug = require('pug');

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
