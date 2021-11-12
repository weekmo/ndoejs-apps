const logger = (req, res, next) => {
    const time = new Date().getFullYear();
    console.log(req.method, req.url, time);
    next();
};

module.exports = logger;