const express = require('express');
const whoController = require('../controllers/whoController');

const router = express.Router();

router.route('/whoami').get(whoController.getWho);

module.exports = router;
