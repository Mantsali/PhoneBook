const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;
const contactRoutes = require('./routes/contactRoutes')

//middleware so the server can parse json data
app.use(express.json())
app.use(express.urlencoded({ extended: false}));


app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});