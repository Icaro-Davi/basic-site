module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorizarion');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPITIONS, PUT, PATCH, DELETE');
    next();
}