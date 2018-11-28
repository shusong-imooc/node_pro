var express = require('express');
var router = express.Router();
var md5=require('md5')

/* GET home page. */
router.get('/',(req, res)=>{
  res.json({
    "name":"shusong",
    "pwd":md5('shusong159')
  })
});
module.exports = router;
