const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const recordsRoute = require('./routes/records');

app.use(cors());
app.use(bodyParser.json());
app.use('/records', recordsRoute);

mongoose.connect('mongodb://admin:admin123@ds151247.mlab.com:51247/icrowdtask', { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    // console.log('connected to db')
})

app.listen(3000);