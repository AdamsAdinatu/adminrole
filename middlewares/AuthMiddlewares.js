const jwt = require('jsonwebtoken')
const User = require('../models/usersSchema')




// is admin  middlewares

exports.admin = async function (req, res, next) {
    if (req.User && req.User.isAdmin) {
        res.status(401).json({
            message:"you are not an authorized admin"
        })
    }
}