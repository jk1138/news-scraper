
var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  link: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true,
    unique: true
  },
  excerpt: {
    type: String//,
    //required: true//,
   // unique: true
  },
  saved: {
    type: Boolean,
    required: true,
    default: false
  },
  // `Comment` is an object that stores a Comment id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Comments
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
});

ArticleSchema.plugin(uniqueValidator);

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;