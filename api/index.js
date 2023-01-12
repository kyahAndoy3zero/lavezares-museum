const express = require("express");
const dotenv = require('dotenv').config()

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.use('/api/v1/reservations', require('../backend/routes/reservationRoutes'))



const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started on port ${port}`));