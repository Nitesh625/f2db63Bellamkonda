var express = require('express');

var router = express.Router();

// Require controller modules.

var api_controller = require('../controllers/api');

var Movie_controller = require('../controllers/Movie');

/// API ROUTE ///

// GET resources base.

router.get('/', api_controller.api);

/// Movie ROUTES ///

// POST request for creating a Movie.  

router.post('/Movies', Movie_controller.Movie_create_post);

// DELETE request to delete Movie.

router.delete('/Movies/:id', Movie_controller.Movie_delete);

// PUT request to update Movie.

router.put('/Movies/:id', Movie_controller.Movie_update_put);

// GET request for one Movie.

router.get('/Movies/:id', Movie_controller.Movie_detail);

// GET request for list of all Movie items.

router.get('/Movies', Movie_controller.Movie_list);

module.exports = router;