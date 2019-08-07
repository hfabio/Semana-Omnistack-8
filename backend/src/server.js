const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const routes = require('./routes');

mongoose.connect('mongodb+srv://root:220311@cluster0-g5qxi.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(4000);
