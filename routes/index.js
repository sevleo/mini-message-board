var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.post("/new", function (req, res, next) {
  console.log(req.body.name);
  console.log(req.body.message);
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });

  res.redirect("/");
});

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

module.exports = router;
