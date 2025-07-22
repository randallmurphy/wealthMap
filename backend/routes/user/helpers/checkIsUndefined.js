function checkIsUndefined(req, res, next){
    if(Object.keys(req.body).length === 0){
        // means empty object if no keys in obj keys array
        return res.status(500).json({message: "please fill out form."});
    } else {
        next()
    }
}

module.exports = checkIsUndefined;