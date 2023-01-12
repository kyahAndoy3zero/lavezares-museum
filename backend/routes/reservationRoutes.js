const express = require("express");
const router = express.Router();


const { reserveGuest, confirmation } = require('../controllers/reservationController')

router.route('/').post(reserveGuest);
router.route('/home').get(confirmation);

module.exports = router;