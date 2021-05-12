const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const Recipe = require('./models/Recipe');
const User = require('./models/User');

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}?retryWrites=true&w=majority`;

//connect to db
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const port = process.env.PORT || 3200;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
