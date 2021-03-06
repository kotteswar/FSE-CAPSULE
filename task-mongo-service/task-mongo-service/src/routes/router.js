var express = require('express')
var router = express.Router();
var cors = require('cors');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.use(cors());
router.use('/users', require('./user.router'));
router.use('/task', require('./task.router'));

module.exports = router;