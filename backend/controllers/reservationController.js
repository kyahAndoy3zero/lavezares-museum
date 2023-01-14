const { response } = require('express');
const nodemailer = require('nodemailer')


const options = { year: 'numeric', month: 'long', day: 'numeric' };


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "lavezareschurchmuseum@gmail.com",
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



// ginaortecio05@gmail.com
// ortecio.zandrogene30@gmail.com
let mailOptions = {
    from: '"Nuestra Señora de Salvacion Historical and Ecclesiastical Museum" <lavezareschurchmuseum@gmail.com>',
    to: 'ginaortecio05@gmail.com',
    subject: 'Test',
}



const reserveGuest = async (req, res) => {

    const { firstName, lastName, email, date, time, number } = req.body

    if (!firstName || !lastName || !number || !email || !date || !time) return res.send({ status: 'Missing data' });

    const newDate = new Date(date);
    const formattedDate = `${newDate.toLocaleDateString('en-US', options)}`;


    mailOptions.text = `${firstName} ${lastName} made a booking appoinment and would like to visit the museum on ${formattedDate} at ${time}. You can contact ${firstName} through email ${email} or you can call this number ${number}.`

    transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
            console.log(err)
        } else {
            console.log('Book Sent')
            responseToUser(email, firstName)

        }
    })
}




module.exports = {
    reserveGuest,
};
