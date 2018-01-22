var express = require ('express');
var router = express.Router ();

var primoMiddleware = function(req,res,next){
  if(req.query.token == 'pippococaina'){
    next();
  }else {
    res.status(401).send({message : 'Autentication failed'});
  }
}

/*router.use(function(req,res,next){
  if(req.query.token == 'pippococaina'){
    next();
  }else {
    res.status(401)send({message : 'Autentication failed'});
  }
})*/

router.get ('/', primoMiddleware, function(req, res, next) {
  res.status(200).send({message : 'Autentication succeded'})
})

module.exports = router;
