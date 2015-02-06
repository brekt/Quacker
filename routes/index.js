var express = require('express');
var router = express.Router();

// knex => bookshelf  

var env = process.env.NODE_ENV || 'development';
var knexConfig = require('./../knexfile.js')[env];
var knex = require('knex')(knexConfig);
//var bookshelf = require('bookshelf')(knex);
//var bluebird = require('bluebird');

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
    knex.transaction(function(trx){
      knex('quacks').transacting(trx).insert({quack_user_id: 1, quack_content: quack})
      // .then(function(resp){
      //   var id = resp[0];
      // return console.log(resp);
      //})
      .then(trx.commit)
      .then(trx.rollback);
    }).then(function(resp){
      console.log('Transaction complete.');
    });
    //.catch(function(err){
    //   console.log(err); 
     //});
});

module.exports = router;
