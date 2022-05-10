exports.getWho = (req, res) => {
    res.json({
        ipaddress: req.headers['Forwarded'],
        language: req.headers['accept-language'],
        software: req.headers['user-agent'],
    });
};
