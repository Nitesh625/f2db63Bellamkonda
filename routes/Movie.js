var express = require('express');
var Movie_controller = require('../controllers/Movie');
var router = express.Router();

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
router.get('/', Movie_controller.Movie_view_all_Page ); 
// GET request for one Movie. 
router.get('/Movie/:id', Movie_controller.Movie_detail);
/* GET detail Movie page */ 
router.get('/detail',secured, Movie_controller.Movie_view_one_Page); 
/* GET create Movie page */ 
router.get('/create',secured, Movie_controller.Movie_create_Page); 
/* GET create update page */ 
router.get('/update',secured, Movie_controller.Movie_update_Page);
/* GET delete Movie page */ 
router.get('/delete',secured, Movie_controller.Movie_delete_Page);
module.exports = router;
 