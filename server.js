const express = require('express');
const router = require("./router/router");

const app = express();

app.use("/",router);
 
app.get('/', (req, res) => {
    res.send('Oh Hi There!');
});
 
app.listen(3000, () => console.log('Listening on port 3000'));