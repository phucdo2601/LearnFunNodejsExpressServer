const express = require('express');

const app = express();

const port = 3010;
app.get('/', (req, res) =>{
    res.send("Hello Everyone to my first basic node express server!");
});

app.get('/about', (req, res) =>{
    res.send("I am Phuc Do!");
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port} and htpp://localhost:${port}`);
});