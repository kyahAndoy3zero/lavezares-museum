const { response } = require('express');
const nodemailer = require('nodemailer')


const options = { year: 'numeric', month: 'long', day: 'numeric' };


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_AUTH,
        pass: process.env.PASSWORD
    },

    tls: {
        rejectUnauthorized: false,
    }
})



const responseToUser = (email, firstName) => {

    mailOptions.subject = 'Reservation Received'
    mailOptions.to = email
    mailOptions.text = `Hi ${firstName}, thank you for your reservation. We have received your request and will be in touch soon. In the meantime, please wait for our staff to contact you.`

    transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
            console.log(err)
        } else {
            console.log('Response Sent')
        }
    })

}


let mailOptions = {
    from: '"Nuestra Señora de Salvacion Historical and Ecclesiastical Museum" <lavezareschurchmuseum@gmail.com>',
    to: process.env.USER_TO,
    subject: 'Reservation Request',
}



const reserveGuest = async (req, res) => {

    const { firstName, lastName, email, date, time, number } = req.body

    const newDate = new Date(date);
    const formattedDate = `${newDate.toLocaleDateString('en-US', options)}`;


    mailOptions.text = `${firstName} ${lastName} made a booking appoinment and would like to visit the museum on ${formattedDate} at ${time}. You can contact ${firstName} through email ${email} or you can call this number ${number}.`

    transporter.sendMail(mailOptions, function (err, success) {
        if (success) {
            responseToUser(email, firstName)
            console.log('Book Sent')
        } else {

            console.log(err)
        }
    })

    res.status(201).json({
        status: "success",
        data: {
            message: "booked"
        }
    })
}




module.exports = {
    reserveGuest,
};
