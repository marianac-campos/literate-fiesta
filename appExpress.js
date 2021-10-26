const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_, res) => {
    res.send('Hello World!!!! IRRAAAAA 😎 🤌');
})

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`);
})