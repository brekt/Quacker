var express = require('express');
var router = express.Router();

var env = process.env.NODE_ENV || 'development';
var knexConfig = require('./../knexfile.js')[env];
var knex = require('knex')(knexConfig);

// render home page

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quacker' });
});

// insert quack into database

router.post('/', function(req, res){
    var quack = req.body.quack; // form input  
    console.log(quack);
    knex.transaction(function(trx){
      knex('quacks').transacting(trx).insert({quack_user_id: 2, quack_content: quack})
      .then(trx.commit)
      .then(trx.rollback);
    }).then(function(resp){
      console.log('Transaction complete.');
    })
});

module.exports = router;
