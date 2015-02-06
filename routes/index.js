var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quacker' });
});

// router.post('/', function(req, res, next) {
// 	res.render('index', {title: 'Quacker' });
// });
router.post('/', function(req, res){
    var quack = req.body.quack; // form input  
    console.log(quack);
});

module.exports = router;
