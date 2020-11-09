const http = require('http');
const port = 3000;
const express = require('express');
const app = express();
const cors = require('cors');


app.get('/', function(req, res) {
    res.send("Hello world");
});




// Start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  });