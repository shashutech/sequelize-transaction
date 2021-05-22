// Blog model

module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define("blog", {
    title: {
      type: Sequelize.STRING,
      allowedNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowedNull: false,
    },
  });

  return Blog;
};
