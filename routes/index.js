const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/drawpad", (req, res) => {
  res.render("drawpad");
});
module.exports = router;
