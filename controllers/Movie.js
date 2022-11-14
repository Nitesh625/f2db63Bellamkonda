var Movie = require('../models/Movie');
// List of all Movies
exports._list = function(req, res) {
 res.send('NOT IMPLEMENTED: Movie list');
};
// for a specific Movie.
exports.Movie_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Movie detail: ' + req.params.id);
};
// Handle Movie create on POST.
exports.Movie_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Movie create POST');
};
// Handle Movie delete form on DELETE.
exports.Movie_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Movie delete DELETE ' + req.params.id);
};
// Handle Movie update form on PUT.
exports.Movie_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Movie update PUT' + req.params.id);
};
// VIEWS

   // List of all Movies
exports.Movie_list = async function(req, res) {
    try{
    theMovie = await Movie.find();
    res.send(theMovie);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Movie_view_all_Page = async function(req, res) {
    try{
    theMovie = await Movie.find();
    res.render('Movie', { title: 'Movie Search Results', results: theMovie });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Movie create on POST.
exports.Movie_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Movie();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Movie_type":"goat", "cost":12, "size":"large"}
    document.movieName = req.body.movieName;
    document.movieType = req.body.movieType;
    document.durMin = req.body.Movie_type;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}
// for a specific Movie.
exports.Movie_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Movie.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
   // Handle Movie update form on PUT.
exports.Movie_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Movie.findById( req.params.id)
 // Do updates of properties
 if(req.body.movieName)
 toUpdate.movieName = req.body.movieName;
 if(req.body.movieType) toUpdate.movieType = req.body.movieType;
 if(req.body.durMin) toUpdate.durMin = req.body.durMin;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};