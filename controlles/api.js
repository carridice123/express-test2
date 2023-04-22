const rapName = require('../models/getRappersName')

module.exports = {
    rapper: (req,res)=>{
        const rappersName = req.params.rapperName.toLowerCase()
        if(rapName.rappers[rappersName]){
            res.json(rapName.rappers[rappersName])
        }else{
            res.json(rapName.rappers['dylan'])
        }
    }
}








