const { isEmail } = require("validator");

function checkIsEmail(req,res,next){
    if(!isEmail(req.body.email)){
        const {errorObj} = res.locals;
        errorObj.emailError = "email must be valid";
    }
    next()
}

module.exports = checkIsEmail;