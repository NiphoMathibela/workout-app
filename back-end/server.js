const express = require('express');
const mongoose = require('mongoose');
const port = 3000;

const app = express();

app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});