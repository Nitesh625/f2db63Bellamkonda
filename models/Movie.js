const mongoose = require("mongoose") 
const MovieSchema = mongoose.Schema({ 
 movieName: String, 
 movieType: String, 
 durMin: Number 
}) 
 
module.exports = mongoose.model("Movie", MovieSchema) 