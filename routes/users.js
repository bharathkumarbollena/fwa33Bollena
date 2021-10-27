var express = require('express');
var router = express.Router();
var i =0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  i++;
  res.send(`User accesses are: ${i}`);
});

module.exports = router;
