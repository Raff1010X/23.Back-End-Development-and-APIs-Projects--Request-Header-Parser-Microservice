exports.getWho = (req, res) => {
    let ipaddress =
        req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.json({
        ipaddress,
        language: req.headers['accept-language'],
        software: req.headers['user-agent'],
    });
};
