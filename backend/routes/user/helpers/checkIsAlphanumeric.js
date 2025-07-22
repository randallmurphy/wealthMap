const { isAlphanumeric } = require("validator");

function checkIsAlphanumeric(req,res,next){
    if(!isAlphanumeric(req.body.userName)){
        const { errorObj } = res.locals;
                errorObj.userName = "username must be alphanumeric";
                //res.json({message: "username must be alphanumeric"});
            } 
            next();
}

module.exports = checkIsAlphanumeric;