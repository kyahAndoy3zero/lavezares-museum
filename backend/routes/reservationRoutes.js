const express = require("express");
const router = express.Router();


const { reserveGuest, confirmation } = require('../controllers/reservationController')

router.route('/').post(reserveGuest).get(confirmation);


module.exports = router;