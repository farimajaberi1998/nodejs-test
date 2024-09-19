function Log(req,res,next) {
    console.log("Logger")
    next()
}

module.exports = Log;