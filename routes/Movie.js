var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) 
{
  res.render('Movie', { title: 'Search Results Movie' });
});

module.exports = router;

 