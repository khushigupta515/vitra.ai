const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/',controller.home);
router.get('/updatepeople',controller.homeafterupdate);
router.get('/secondpage',controller.secondpage);


module.exports = router;