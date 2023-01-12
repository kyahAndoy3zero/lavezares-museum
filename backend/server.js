const express = require("express");
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000;
const app = express();


app.use(express.json());
app.use(cors())

app.use('/api/v1/reservations', require('./routes/reservationRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`));