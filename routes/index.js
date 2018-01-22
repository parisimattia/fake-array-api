var express = require ('express');
var router = express.Router ();

var primoMiddleware = function(req,res,next){
  if(req.query.token == 'pippo1'){
    next();
  }else {
    res.send(401,'Autentication failed');
  }
}

var secondoMiddleware = function(req, res, next) {
  res.send(200, 'Autentication succeded')
}

router.get ('/', primoMiddleware, secondoMiddleware)

module.exports = router;
