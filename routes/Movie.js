var express = require('express');
var Movie_controller = require('../controllers/Movie');
var router = express.Router();

// router.get('/', function(req, res, next) 
// {
//   res.render('Movie', { title: 'Search Results Movie' });
// });

router.get('/', Movie_controller.Movie_view_all_Page ); 

// GET request for one Movie. 
router.get('/Movie/:id', Movie_controller.Movie_detail);

/* GET detail Movie page */ 
router.get('/detail', Movie_controller.Movie_view_one_Page); 

/* GET create Movie page */ 
router.get('/create', Movie_controller.Movie_create_Page); 

/* GET create update page */ 
router.get('/update', Movie_controller.Movie_update_Page);

/* GET delete Movie page */ 
router.get('/delete', Movie_controller.Movie_delete_Page);
module.exports = router;
 