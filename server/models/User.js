const { TransformQuery } = require('@graphql-tools/wrap');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  memberSince: {
    type: Date,
    default: Date.now,
  },
  favoriteRecipes: {
    type: [Schema.Types.ObjectId], //array of all IDs provided by database
    ref: 'Recipe',
  },
});

module.exports = mongoose.model('User', UserSchema);
