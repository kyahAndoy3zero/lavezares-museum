const express = require("express");
const router = express.Router();


const { reserveGuest } = require('../controllers/reservationController')

router.route('/').post(reserveGuest);

module.exports = router;