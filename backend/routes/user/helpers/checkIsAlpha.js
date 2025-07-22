const { isAlpha } = require("validator");

function checkIsAlpha(req,res,next){
    if( !isAlpha(req.body.firstName)|| !isAlpha(req.body.lastName)){
        const { errorObj } = res.locals;
        errorObj.nameError = "First and lst name must be alphanumeric";
        
    }
    next();
}

module.exports = checkIsAlpha;