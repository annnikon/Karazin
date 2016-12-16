var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', {});
});
/*router.get('/:numb&:bul',function(req,res,next){
  console.log(req.params.numb+"//////"+req.params.bul);
  Audience.findOne({number:req.params.numb,building:req.params.bul},function(err,audiences){
    if(err) return next(err);
    res.render('json',{
        json:audiences
    })

  });
});
*/
module.exports = router;
