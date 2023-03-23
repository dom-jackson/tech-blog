const User = require('./User');
const Posts = require('./Posts');
const Comments = require('./Comments');

User.hasMany(Posts, {
  foreignKey: 'userId',
});

Posts.belongsTo(User, {
  foreignKey: 'userId',
});

Posts.hasMany(Comments, {
  foreignKey: 'postId',
});

Comments.belongsTo(Posts, {
  foreignKey: 'postId',
});

Comments.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = { User, Posts, Comments };
