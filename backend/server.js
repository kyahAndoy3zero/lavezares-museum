const express = require("express");
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000;
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors({
    origin: 'https://laveareschurchmuseum.netlify.app/'
}))

app.use('/api/v1/reservations', require('./routes/reservationRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`));