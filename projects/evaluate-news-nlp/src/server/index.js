const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const API_KEY = process.env.API_KEY;
const api = 'https://api.meaningcloud.com/sentiment-2.1';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.resolve('dist')));


app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

app.post('/url', async function (req, res) {
  if(!req.body.url) {
    return res.status(400).json({
       message: "Bad input",
    });}
  const url = req.body.url;
  const link = api + '?key=' + API_KEY + '&&url=' + url + '&&lang=en';
  const response = await fetch(link);
  const data = await response.json();
  res.send(data);
});


app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
});