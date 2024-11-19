function checkAuthentication(req, res, next) {
    if (req.session.isAuthenticated) {
        next();
    } else {
        res.status(401).json({ message: 'Acesso não autorizado' });
    }
}

module.exports = checkAuthentication;
