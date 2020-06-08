const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./Router');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

app.listen(3333, () => console.log('Rodando em http://localhost:3333'));
