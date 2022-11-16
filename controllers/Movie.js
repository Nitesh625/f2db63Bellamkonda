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
// Handle Costume delete on DELETE. 
exports.Movie_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Movie.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
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
    document.durMin = req.body.durMin;
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
// Handle a show one view with id specified by query 
exports.Movie_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Movie.findById( req.query.id) 
        res.render('Moviedetail',  { title: 'Movie Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a Movie. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Movie_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Moviecreate', { title: 'Movie Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a Movie. 
// query provides the id 
exports.Movie_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Movie.findById(req.query.id) 
        res.render('Movieupdate', { title: 'Movie Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`);
} 
}; 

// Handle a delete one view with id from query 
exports.Movie_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Movie.findById(req.query.id) 
        res.render('Moviedelete', { title: 'Movie Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};