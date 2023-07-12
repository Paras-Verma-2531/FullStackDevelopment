const mainRouter = require("express").Router();
const postRouter = require("./post");
mainRouter.get("/", (req, res) => {
  res.json({
    name: "Paras",
  });
});
mainRouter.use("/post", postRouter);
module.exports = mainRouter;
