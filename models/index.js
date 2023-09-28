const User = require('./User');
const Post = require('./Post');

//configuring the type relationship
//ono to one
//one to many
//many to many
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

//link parent and child together
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Post };