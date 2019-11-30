const express = require('express');
const path = require('path');
const cors = require('cors'); 

const app = express();

const port = 3000;

app.use(cors());

app.use(express.static(__dirname + '/../frontend/dist/'));

app.listen(port, () => console.log(`listens on port ${port}`));