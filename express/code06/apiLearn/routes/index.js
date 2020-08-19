var express = require('express');
var router = express.Router();

let cate = require('../controllers/cateController');
const cateService = require('../controllers/cateController');
/* GET home page. */
router.get('/', cate.getCate);
router.get('/getPostCate', cateService.getPostCate)

module.exports = router;
