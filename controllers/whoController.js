exports.getWho = (req, res) => {
    res.json({
        ipaddress: req.headers['X-Forwarded-For'],
        language: req.headers['accept-language'],
        software: req.headers['user-agent'],
    });
};
