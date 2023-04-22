const names = require('../models/getRappersName')

module.exports = {
    rapper: (req,res)=>{
        const rappersName = req.params.rapperName.toLowerCase()
        if(names[rappersName]){
            res.json(names[rappersName])
        }else{
            res.json(names['dylan'])
        }
    }
}








