const name = require('../models/getRappersName')

module.exports = {
    rapper: (req,res)=>{
        const rappersName = req.params.rapperName.toLowerCase()
        if(name[rappersName]){
            res.json(name[rappersName])
        }else{
            res.json(name['dylan'])
        }
    }
}








