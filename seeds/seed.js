const sequelize = require('../config/connection');
const User = require('../models/User');
const Posts = require('../models/Posts');
const Comments = require('../models/Comments');

const userData = require('./userData.json');
const postsData = require('./postsData.json');
const commentsData = require('./commentsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Posts.bulkCreate(postsData, {
    individualHooks: true,
    returning: true,
  });
  await Comments.bulkCreate(commentsData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
