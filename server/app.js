const express = require('express');
const path = require('path');
const cors = require('cors'); 
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const mongoDB = 'mongodb://127.0.0.1/my_database';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(express.static(__dirname + '/../frontend/dist/'));

app.listen(port, () => console.log(`listens on port ${port}`));