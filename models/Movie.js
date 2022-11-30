const mongoose = require("mongoose") 
const MovieSchema = mongoose.Schema({ 
 movieName: {type: String,required: [true, 'Name of the Movie cannot be empty']}, 
 movieType: {type: String,required: [true, 'Movie type cannot be empty']}, 
 durMin: {type: Number,required: [true, 'Movie duration cannot be empty']}
}) 
 
module.exports = mongoose.model("Movie", MovieSchema) 