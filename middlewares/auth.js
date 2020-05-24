const secret = process.env.SECRET_TOKEN;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    let token = req.headers['authorization'] || '';

    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid auth token'
                });
            } else {
                req.user = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({
            success: false,
            message: 'It is necessary to pass the auth token'
        });
    }
}