var express = require('express');
var router = express.Router();

var env = process.env.NODE_ENV || 'development';
var knexConfig = require('./../knexfile.js')[env];
var knex = require('knex')(knexConfig);

// render home page

router.get('/', function(req, res, next) {

  // use knex to pull up newest quacks

  knex.select('quack_content', 'quack_timestamp').from('quacks').orderBy('quack_timestamp', 'desc').limit(10).then(function(recentQuacks) {
      console.log(recentQuacks);
      res.render('index', { title: 'Quacker', recentQuacks: recentQuacks });
  });
});



// insert quack into database

router.post('/', function(req, res){
	var quack = req.body.quack; // form input  
  knex.transaction(function(trx){
    knex('quacks').transacting(trx).insert({quack_user_id: 2, quack_content: quack})
    .then(trx.commit)
    .then(trx.rollback);
  }).then(function(resp){
  })
});



module.exports = router;
