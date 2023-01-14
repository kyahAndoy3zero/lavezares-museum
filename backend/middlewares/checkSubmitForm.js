const checkSubmitForm = (req, res, next) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.number || !req.body.email || !req.body.date || !req.body.time) {
        return res.status(400).json({
            status: 'fail',
            message: 'There are missing fields'
        })
    }

    next();
}


module.exports = {
    checkSubmitForm
}