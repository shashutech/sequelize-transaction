const express = require("express");
const { sequelize } = require("../models");
// const { Transaction } = require("sequelize");
const db = require("../models");
const Blogs = db.blogs;
const bodyParser = require("body-parser");
const router = express.Router();

var jsonParser = express.json();

// @URL    -------   /blogs
// @method -------   GET
// @desc   -------   Viewing all the blogs in the DB
router.get("/", (req, res) => {
  Blogs.findAll()
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

// @URL    -------   /blogs
// @method -------   POST
// @desc   -------   Adding a blog to the DB
router.post("/", jsonParser, async (req, res) => {
  const blog = {
    title: req.body.title,
    description: req.body.description,
  };
  //   const t = await sequelize.transaction();

  //   try {
  //     Blogs.create(blog, {
  //       transaction: t,
  //     });
  //     console.log("commit");
  //     t.commit();
  //     res.send("ok");
  //   } catch (err) {
  //     console.log("Rollback");
  //     console.log("Error" + err);
  //     res.send("error");
  //   }

  sequelize.startTransaction(() => {
    Blogs.create(blog)
      .then((result) => {
        sequelize.commit().success(() => {
          res.send(result);
        });
      })
      .catch((error) => {
        transaction.rollback().success(function () {
          res.send(error);
        });
      });
  });
});

// @URL    -------   /blogs/{id}
// @method -------   DELETE
// @desc   -------   Deleting a blog with given id
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const t = await sequelize.transaction();
  try {
    Blogs.destroy(
      {
        where: {
          id: id,
        },
      },
      {
        transaction: t,
      }
    );
    console.log("commit");
    t.commit();
    res.send("Deleted the given id");
  } catch (err) {
    console.log("Rollback");
    t.rollback();
    res.send("Cannot delete");
  }
});

module.exports = router;
