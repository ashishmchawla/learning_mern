const express = require('express');
const connectDB = require('./config/db');

const app = express();
//Connection to Database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started running on port: ${PORT}`));

app.get('/', (req, res) => res.send('API running'));