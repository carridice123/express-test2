const rapName = require('../models/getRappersName')

module.exports = {
    rapper: (req,res)=>{
        const rappersName = req.params.rapperName.toLowerCase()
        if(rapName[rappersName]){
            res.json(rapName[rappersName])
        }else{
            res.json(rapName['dylan'])
        }
    }
}








