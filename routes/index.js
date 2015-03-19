var express = require('express');
var router = express.Router();

var env = process.env.NODE_ENV || 'development';
var knexConfig = require('./../knexfile.js')[env];
var knex = require('knex')(knexConfig);

// render home page



router.get('/', function(req, res, next) {

  if (req.cookies.registered) {

  // use knex to pull up newest quacks

    // knex.select('quack_content', 'quack_timestamp', 'quack_user_id').from('quacks').orderBy('quack_timestamp', 'desc').limit(10).then(function(recentQuacks) {
      knex('users')
        .join('quacks', 'users.user_id', 'quacks.quack_user_id')
        .select('users.user_name', 'quacks.quack_timestamp', 'quacks.quack_content').orderBy('quacks.quack_timestamp', 'desc').limit(10).then(function(recentQuacks) {
          console.log(recentQuacks);
          res.render('index', { title: 'Quacker', recentQuacks: recentQuacks });
    });
  }
  else {
    res.render('signin', { title: 'Quacker'});
  }
});

router.get('signin', function(req, res, next) {
  res.render('signin', { title: 'Quacker' });
});

// insert quack into database

router.post('/', function(req, res, next){
	var quack = req.body.quack; // form input  
  knex.transaction(function(trx){
    knex('quacks').transacting(trx).insert({quack_user_id: 2, quack_content: quack})
    .then(trx.commit)
  }).then(function(){
    res.redirect('/');
  });
});

router.post('/signin', function(req, res, next) {
  res.cookie('registered', req.body.username);
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  knex.transaction(function(trx){
    knex('users').transacting(trx).insert({user_name: username, user_email: email, user_password: password})
    .then(trx.commit)
  }).then(function(){
    res.redirect('/');
  });
});



module.exports = router;
