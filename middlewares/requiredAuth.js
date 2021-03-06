module.exports = (req, res, next) => {
    if (req.user) {
        return next();
    }
    
    res.status(401).send({ message: 'You need to sign in first' });
}