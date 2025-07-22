// check any incoming data is empty  

function checkIsEmpty(req,res,next){
    const errorObj = {};
    const body = req.body;
    //object.keys => for in;
    for(let key in body){
        if(body[key] === ""){ //body[key].length === 0;
            errorObj[key] = `${key} cannot be empty`;
        }
    }
     if(Object.keys(errorObj).length > 0){
        //somethings wrong;
        return res.status(400).json({message: "failure", payload: errorObj});
     } else {
        // error obj is empty no error; errorObj={};
        // res.locals location that we can save some data that maintains itself through req cycle;

        res.locals.errorObj = errorObj;
        console.log(res.locals);
        next();
     }
}

module.exports = checkIsEmpty;