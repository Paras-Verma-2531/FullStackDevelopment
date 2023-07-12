//there can only be one App therefore router act as mini app and can be used:
const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({
    data: "post updated",
  });
});
router.post("/all", (re, res) => {
  res.json([
    {
      data: "paras verma",
    },
    {
      data: "abhishek chawla",
    },
  ]);
});
module.exports = router;
