const express = require("express");
const router = express.Router();


const { reserveGuest } = require('../controllers/reservationController')
const { checkSubmitForm } = require('../middlewares/checkSubmitForm')


router.route('/').post(checkSubmitForm, reserveGuest);


module.exports = router;