var express = require('express');

var router = express.Router();

var api_controller = require('../controllers/api');

var Movie_controller = require('../controllers/Movie');

/// API ROUTE ///

// GET resources base.

router.get('/', api_controller.api);

/// Movie ROUTES ///
// POST request for creating a Movie.  
router.post('/Movie', Movie_controller.Movie_create_post);
// DELETE request to delete Movie.

router.delete('/Movie/:id', Movie_controller.Movie_delete);

// PUT request to update Movie.

router.put('/Movie/:id', Movie_controller.Movie_update_put);

// GET request for one Movie.

router.get('/Movie/:id', Movie_controller.Movie_detail);



router.get('/Movie', Movie_controller.Movie_list);

module.exports = router;
