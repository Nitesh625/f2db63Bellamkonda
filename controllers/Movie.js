var Movie = require('../models/Movie');

exports.Movie_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie list');
};

exports.Movie_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie detail: ' + req.params.id);
};

exports.Movie_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Movie();
    document.movieName = req.body.movieName;
    document.movieType = req.body.movieType;
    document.durMin = req.body.durMin;
    
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

exports.Movie_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie delete DELETE ' + req.params.id);
};

exports.Movie_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Movie update PUT' + req.params.id);
};
exports.Movie_list = async function(req, res) {
    try{
        theMovies = await Movie.find();
        res.send(theMovies);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

exports.Movie_view_all_Page = async function(req, res) {
    try{
        theMovies = await Movie.find();
        res.render('Movie', { title: 'Movie Search Results', results: theMovies });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};